<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Models\VisitorCart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = Cart::all();
        return response()->json(['carts' => $carts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $visitorIdentifier = $request->ip();
        $existingCart = Cart::where('identifier', $visitorIdentifier)->whereNull('created_at')->first;
        if (!$existingCart) {
            return response()->json(['cart_id' => $existingCart->id]);
        }
        $cart = new Cart();
        $cart->identifier = $visitorIdentifier;
        $cart->save();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $cart = Cart::findOrFail($id);
        return response()->json(['cart' => $cart]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cartItems = $cart->visitorCarts;
        foreach ($cartItems as $cartItem) {
            $cartItem->delete();
        }
        $cart->delete();
        return redirect()->route('home')->with('success', 'Nákupní košík byl smazán.');
    }
}
