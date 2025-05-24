import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import "../css/ImageConverter.css";
import GoogleAd from "./adFolder/GoogleAd";

const ImageConverter = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [outputFormat, setOutputFormat] = useState("jpeg");
  const [quality, setQuality] = useState(100);
  const [fileSizes, setFileSizes] = useState([]);
  const [convertedFileSizes, setConvertedFileSizes] = useState([]);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedImagePreviews, setConvertedImagePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 👈 NEW STATE

  useEffect(() => {
    const sizes = selectedImages.map((img) =>
      (img.size / 1024 / 1024).toFixed(2)
    );
    setFileSizes(sizes);
  }, [selectedImages]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setSelectedImages(files);
      setImagePreviews(files.map((file) => URL.createObjectURL(file)));
      setIsConverted(false);
      setConvertedImagePreviews([]);
      setConvertedFileSizes([]);
    }
  };

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  };

  const canvasToBlob = (canvas, type, quality) => {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        type,
        quality
      );
    });
  };

  const convertImagesToZip = async () => {
    if (selectedImages.length === 0) {
      alert("Please upload at least one image!");
      return;
    }

    setIsLoading(true); // 👈 START LOADING
    const zip = new JSZip();
    const newConvertedPreviews = [];
    const newConvertedSizes = [];

    try {
      for (let i = 0; i < selectedImages.length; i++) {
        const img = await loadImage(imagePreviews[i]);

        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const blob = await canvasToBlob(
          canvas,
          `image/${outputFormat}`,
          ["jpeg", "webp", "png"].includes(outputFormat)
            ? quality / 100
            : undefined
        );

        const blobUrl = URL.createObjectURL(blob);
        newConvertedPreviews.push(blobUrl);
        newConvertedSizes.push((blob.size / 1024 / 1024).toFixed(2));

        const originalName = selectedImages[i].name.replace(/\.[^/.]+$/, "");
        zip.file(`${originalName}.${outputFormat}`, blob);
      }

      setConvertedImagePreviews(newConvertedPreviews);
      setConvertedFileSizes(newConvertedSizes);
      setIsConverted(true);

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `converted-images.zip`);
    } catch (error) {
      console.error("Error during conversion and zipping:", error);
      alert("Something went wrong during image conversion.");
    } finally {
      setIsLoading(false); // 👈 STOP LOADING
    }
  };

  return (
    <div className="image-converter-container">
      <h1>Image Format Converter & Compressor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file-input"
        multiple
      />

      {/* Loader */}
      {isLoading && (
        <div className="loader">
          <p>Converting images, please wait...</p>
        </div>
      )}

      <div className="d-md-flex justify-content-between" style={{ gap: "20px", flexWrap: "wrap" }}>
        {/* Original Previews */}
        {imagePreviews.length > 0 && (
          <div className="preview-section">
            <h3>Original Previews:</h3>
            {imagePreviews.map((src, idx) => (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <img
                  src={src}
                  alt={`Original Preview ${idx + 1}`}
                  className="image-preview"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                />
                <p>Size: {fileSizes[idx]} MB</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ width: "100%", margin: "20px" }}>
          <GoogleAd />
        </div>

        {/* Converted Previews */}
        {isConverted && convertedImagePreviews.length > 0 && (
          <div className="converted-preview-section">
            <h3>Converted Previews:</h3>
            {convertedImagePreviews.map((src, idx) => (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <img
                  src={src}
                  alt={`Converted Preview ${idx + 1}`}
                  className="image-preview"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                />
                <p>Size: {convertedFileSizes[idx]} MB</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Format & Quality Controls */}
      <div className="format-selection">
        <label>Select Output Format:</label>
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          className="format-select"
        >
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WEBP</option>
          <option value="bmp">BMP</option>
          <option value="gif">GIF</option>
          <option value="tiff">TIFF</option>
        </select>
      </div>
      <div className="quality-section">
        <label>Compression Quality: {quality}%</label>
        <input
          type="range"
          min="10"
          max="100"
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="quality-slider"
        />
      </div>

      {/* Convert Button */}
      {imagePreviews.length > 0 && (
        <button
          onClick={convertImagesToZip}
          className="convert-button"
          disabled={isLoading} // 👈 Prevent button spam
        >
          {isLoading ? "Converting..." : "Convert & Download ZIP"}
        </button>
      )}

      <GoogleAd />
      <GoogleAd />
    </div>
  );
};

export default ImageConverter;
