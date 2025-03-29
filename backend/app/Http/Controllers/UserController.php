<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show()
    {
        return response()->json(Auth::user());
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:6|confirmed',
        ]);

        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }

        /** @var \App\Models\User $user */
        $user->update($request->only('name', 'email'));
        return response()->json($user);
    }

    public function delete()
    {
        $user = Auth::user();
        /** @var \App\Models\User $user */
        $user->delete();
        return response()->json(['message' => 'Account deleted']);
    }
}
