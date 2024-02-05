<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->only(['name', 'user', 'password']);


        $user = User::create([
            'name' => $data['name'],
            'user' => $data['user'],
            'password' => Hash::make($data['password']),
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
            'message' => 'Registrace probehla uspesne'
        ]);
    }

    public function login(LoginRequest $request)
    {

        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Přihlašovací údaje nejsou správné'
            ], 422);
        }
        $user = Auth::user();
        $token = $request->user()->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();
        $user->tokens()->delete();

        return response([
            'success' => true
        ]);
    }
}
