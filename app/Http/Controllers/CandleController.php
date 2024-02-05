<?php

namespace App\Http\Controllers;

use App\Models\Candle;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\StoreCandleRequest;
use App\Http\Requests\UpdateCandleRequest;
use App\Http\Resources\CandleResource;
use Illuminate\Support\Facades\File;

class CandleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return CandleResource::collection(Candle::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCandleRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image_candle_main'])) {
            $relativePath = $this->saveImage($data['image_candle_main']);
            $data['image_candle_main'] = $relativePath;
        }

        if (isset($data['image_candle_first'])) {
            $relativePath = $this->saveImage($data['image_candle_first']);
            $data['image_candle_first'] = $relativePath;
        }

        if (isset($data['image_candle_second'])) {
            $relativePath = $this->saveImage($data['image_candle_second']);
            $data['image_candle_second'] = $relativePath;
        }

        $candle = Candle::create($data);

        return new CandleResource($candle);
    }

    /**
     * Display the specified resource.
     */
    public function show(Candle $candle, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $candle->user_id) {
            return abort(403, 'Noprávněná akce');
        }
        return new CandleResource($candle);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Candle $candle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCandleRequest $request, Candle $candle)
    {
        $data = $request->validated();
        if (isset($data['image_candle_main'])) {
            $relativePath = $this->saveImage($data['image_candle_main']);
            $data['image_candle_main'] = $relativePath;
            if ($candle->image_candle_main) {
                $absolutePath = public_path($candle->image_candle_main);
                File::delete($absolutePath);
            }
        }

        if (isset($data['image_candle_first'])) {
            $relativePath = $this->saveImage($data['image_candle_first']);
            $data['image_candle_first'] = $relativePath;
            if ($candle->image_candle_first) {
                $absolutePath = public_path($candle->image_candle_first);
                File::delete($absolutePath);
            }
        }

        if (isset($data['image_candle_second'])) {
            $relativePath = $this->saveImage($data['image_candle_second']);
            $data['image_candle_second'] = $relativePath;
            if ($candle->image_candle_second) {
                $absolutePath = public_path($candle->image_candle_second);
                File::delete($absolutePath);
            }
        }

        $candle->update($data);
        return response()->json(['message' => 'Svíčka úspěšně aktualizována']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Candle $candle, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $candle->user_id) {
            return abort(403, 'Neoprávněná akce.');
        }
        $candle->delete();
        if ($candle->image_candle_main) {
            $absolutePath = public_path($candle->image_candle_main);
            File::delete($absolutePath);
        }
        if ($candle->image_candle_first) {
            $absolutePath = public_path($candle->image_candle_first);
            File::delete($absolutePath);
        }
        if ($candle->image_candle_second) {
            $absolutePath = public_path($candle->image_candle_second);
            File::delete($absolutePath);
        }
        return response('', 204);
    }

    private function saveImage($image)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            $type = strtolower($type[1]);
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('neplatný typ obrázku');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);
            if ($image === false) {
                throw new \Exception('base64_decode selhal');
            }
        } else {
            throw new \Exception('URI data se neschodují s daty z obrázku');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }

    public function getCandle()
    {
        return CandleResource::collection(Candle::orderBy('id')->paginate(10));
    }

    public function getById($id)
    {
        $candle = Candle::find($id);
        if (!$candle) {
            return response()->json(['message' => 'Svička nebyla nalezena'], 404);
        }
        return new CandleResource($candle);
    }
}
