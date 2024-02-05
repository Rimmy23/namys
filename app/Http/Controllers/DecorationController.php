<?php

namespace App\Http\Controllers;

use App\Models\Decoration;
use App\Http\Requests\StoreDecorationRequest;
use App\Http\Requests\UpdateDecorationRequest;
use App\Http\Resources\DecorationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class DecorationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return DecorationResource::collection(Decoration::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(10));
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
    public function store(StoreDecorationRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image_deco_main'])) {
            $relativePath = $this->saveImage($data['image_deco_main']);
            $data['image_deco_main'] = $relativePath;
        }

        if (isset($data['image_deco_first'])) {
            $relativePath = $this->saveImage($data['image_deco_first']);
            $data['image_deco_first'] = $relativePath;
        }

        if (isset($data['image_deco_second'])) {
            $relativePath = $this->saveImage($data['image_deco_second']);
            $data['image_deco_second'] = $relativePath;
        }

        $decoration = Decoration::create($data);

        return new DecorationResource($decoration);
    }

    /**
     * Display the specified resource.
     */
    public function show(Decoration $decoration, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $decoration->user_id) {
            return abort(403, 'Noprávněná akce');
        }
        return new DecorationResource($decoration);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Decoration $decoration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDecorationRequest $request, Decoration $decoration)
    {
        $data = $request->validated();
        if (isset($data['image_deco_main'])) {
            $relativePath = $this->saveImage($data['image_deco_main']);
            $data['image_deco_main'] = $relativePath;
            if ($decoration->image_deco_main) {
                $absolutePath = public_path($decoration->image_deco_main);
                File::delete($absolutePath);
            }
        }

        if (isset($data['image_deco_first'])) {
            $relativePath = $this->saveImage($data['image_deco_first']);
            $data['image_deco_first'] = $relativePath;
            if ($decoration->image_deco_first) {
                $absolutePath = public_path($decoration->image_deco_first);
                File::delete($absolutePath);
            }
        }

        if (isset($data['image_deco_second'])) {
            $relativePath = $this->saveImage($data['image_deco_second']);
            $data['image_deco_second'] = $relativePath;
            if ($decoration->image_deco_second) {
                $absolutePath = public_path($decoration->image_deco_second);
                File::delete($absolutePath);
            }
        }

        $decoration->update($data);
        return response()->json(['message' => 'Dekorace úspěšně aktualizována']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Decoration $decoration, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $decoration->user_id) {
            return abort(403, 'Neoprávněná akce.');
        }
        $decoration->delete();
        if ($decoration->image_deco_main) {
            $absolutePath = public_path($decoration->image_deco_main);
            File::delete($absolutePath);
        }
        if ($decoration->image_deco_first) {
            $absolutePath = public_path($decoration->image_deco_first);
            File::delete($absolutePath);
        }
        if ($decoration->image_deco_second) {
            $absolutePath = public_path($decoration->image_deco_second);
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

    public function getDeco()
    {
        return DecorationResource::collection(Decoration::orderBy('id')->paginate(10));
    }

    public function getById($id)
    {
        $decoration = Decoration::find($id);
        if (!$decoration) {
            return response()->json(['message' => 'Svička nebyla nalezena'], 404);
        }
        return new DecorationResource($decoration);
    }
}
