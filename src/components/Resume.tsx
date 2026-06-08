"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// CORS proxy to bypass Google Drive restrictions
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const GOOGLE_DRIVE_FILE_ID = "1l0bq3sx1vD6ngVG3cb6VzXPeeKSkvN-MaHcJb1TACKs";
const PDF_URL = `${CORS_PROXY}https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center">
      <Document
        file={PDF_URL}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="py-20 text-center">Loading PDF...</div>}
        error={
          <div className="py-20 text-center text-red-500">
            <p>Unable to load PDF. Please use the download button to view.</p>
            <a
              href={`https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`}
              className="mt-4 inline-block rounded-lg bg-primary-500 px-4 py-2 text-white"
            >
              Download PDF
            </a>
          </div>
        }
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
