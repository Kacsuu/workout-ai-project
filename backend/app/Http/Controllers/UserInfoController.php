<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserInfoController extends Controller
{
    public function show()
    {
        $userInfo = UserInfo::where('user_id', Auth::id())->first();

        if (!$userInfo) {
            return response()->json(['message' => 'User info not found'], 404);
        }

        return response()->json($userInfo);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'height' => 'required|numeric',
            'weight' => 'required|numeric',
            'birth_date' => 'required|date',
            'usr_picture' => 'nullable|string',
        ]);

        $validated['user_id'] = Auth::id();

        $userInfo = UserInfo::create($validated);

        return response()->json($userInfo, 201);
    }

    public function update(Request $request)
    {
        $userInfo = UserInfo::where('user_id', Auth::id())->first();

        if (!$userInfo) {
            return response()->json(['message' => 'User info not found'], 404);
        }

        $validated = $request->validate([
            'height' => 'nullable|numeric',
            'weight' => 'nullable|numeric',
            'birth_date' => 'nullable|date',
            'usr_picture' => 'nullable|string',
        ]);

        $userInfo->update($validated);

        return response()->json($userInfo);
    }
}
