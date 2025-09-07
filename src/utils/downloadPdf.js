import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPdf = async (elementId, fileName = "download.pdf") => {
  const input = document.getElementById(elementId);

  if (!input) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }

  // Convert the element to canvas
  const canvas = await html2canvas(input, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("l", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  let position = 0;

  // Add image to PDF
  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);

  // Download the file
  pdf.save(fileName);
};
