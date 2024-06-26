<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function createUser(CreateUserRequest $request) {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'token' => $user->createToken("API TOKEN")->plainTextToken
        ], 200);
    }
    public function loginUser(LoginUserRequest $request) {
        // Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        if(!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = User::where('email', $request['email'])->first();

        return response()->json([
            'status' => true,
            'message' => 'User logged successfully',
            'token' => $user->createToken("API TOKEN")->plainTextToken
        ], 200);
    }
}
