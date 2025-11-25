package com.unihub

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ToastModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ToastExample"
    }

    @ReactMethod
    fun showToast(message: String) {
        Toast.makeText(reactContext, message, Toast.LENGTH_SHORT).show()
    }
}