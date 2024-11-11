<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\PostTooLargeException;

abstract class Controller
{
    //upload folder
    public $uploadFolder = 'thethanhcoffee.com/uploads/';
    private $RETURN_VALUE = "/thethanhcoffee.com/uploads/";
    public function uploadFileController(Request $request, $path, $fileName = "file")
    {
        $imageFolder = base_path('public/' . $this->uploadFolder . '/file/' . $path);
        if (file_exists($imageFolder . '/' . $path . $request[$fileName])) {
            return "";
        } else {
            $file = $request->file($fileName);
            if (!$file) {
                // echo "fileName: " . $request[$fileName];
                return "";
            }
            $fileName = time() . '-' . $file->getClientOriginalName();
            $file->move($imageFolder, $fileName);
            return $this->RETURN_VALUE . "file/" . $path . "/" . $fileName;
        }
    }
    public function uploadCV(Request $request, $path, $cvName = "cv")
    {
        // handle upload cv
        $cvFolder = base_path('public/' . $this->uploadFolder . '/cv/' . $path);
        if (file_exists($cvFolder . '/' . $request[$cvName])) {
            $fileName = $request[$cvName];
            return response()->json(["success" => $fileName], 200);
        } else {
            $file = $request->file($cvName);
            if (!$file) {
                return response()->json(["error" => "Không được để trống cv"], 400);
            }
            $fileName = $request->name . '-' . time() . '-' . $file->getClientOriginalName();
            $file->move($cvFolder, $fileName);
            $cvFileName = $this->RETURN_VALUE . "cv/" . $path . $fileName;
            return response()->json(["success" => "Upload successfully", "fileName" => $cvFileName], 200);
        }
    }
    public function uploadFile(Request $request, $path, $cvName = "cv")
    {
        // handle upload cv
        $cvFolder = base_path('public/' . $this->uploadFolder . '/cv/' . $path);
        if (file_exists($cvFolder . '/' . $request[$cvName])) {
            $fileName = $request[$cvName];
            return response()->json(["success" => $fileName], 200);
        } else {
            $file = $request->file($cvName);
            if (!$file) {
                return response()->json(["error" => "Không được để trống cv"], 400);
            }
            $fileName = time() . '-' . $file->getClientOriginalName();
            $file->move($cvFolder, $fileName);
            $cvFileName = $this->RETURN_VALUE . "cv/" . $path . $fileName;
            return response()->json(["success" => "Upload successfully", "fileName" => $cvFileName], 200);
        }
    }
    public function uploadImage(Request $request, $path, $imageName = "image")
    {
        $imageFolder = base_path('public/' . $this->uploadFolder . '/image/' . $path);
        if (file_exists($imageFolder . '/' . $path . $request[$imageName])) {
            return "";
        } else {
            $file = $request->file($imageName);
            if (!$file) {
                return "";
            }
            if (!in_array($file->getClientOriginalExtension(), ['jpg', 'png', 'jpeg'])) {
                return "";
            }
            $fileName = time() . '-' . $file->getClientOriginalName();
            $file->move($imageFolder, $fileName);
            return $this->RETURN_VALUE . "image/" . $path . "/" . $fileName;
        }
    }
    public function uploadVideo(Request $request, $path, $videoName = "video")
    {
        $videoFolder = base_path('public/' . $this->uploadFolder . '/video/' . $path);
        if (file_exists($videoFolder . '/' . $request[$videoName])) {
            echo "file exists";
            $fileName = $request[$videoName];
            return "";
        } else {
            $file = $request->file($videoName);
            if (!$file)
                return "";
            if (!in_array($file->getClientOriginalExtension(), ['mp4', 'mov', 'mkv']))
                return "";
            $fileName = time() . '-' . $file->getClientOriginalName();
            $file->move($videoFolder, $fileName);
            return $this->RETURN_VALUE . "video/" . $path . "/" . $fileName;
        }
    }
}
