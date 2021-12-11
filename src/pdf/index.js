import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

import Watermark from "./cert.png";

const Pdf = () => {
  //   const Xmas = new Date(input);
  //   const year = Xmas.getFullYear();

  //   const [details, setdetails] = useState({});

  //   const months = [
  //     "january",
  //     "february",
  //     "march",
  //     "april",
  //     "May",
  //     "June",
  //     "July",
  //     "august",
  //     "september",
  //     "october",
  //     "november",
  //     "december",
  //   ];

  const handleDownload = (props) => {
    const { name, courseName } = props;
    const G5 = () => {
      const doc = new jsPDF("l", "mm", [200, 280]);

      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.setFontSize(13);
      doc.addImage(Watermark, "JPEG", 0, 0, width, height);
      doc.setFontSize(25);
      doc.setFont("Lato-Regular", "normal");
      doc.text(`${name}`, 28, 100);
      doc.setFontSize(25);
      doc.text(`${courseName}`, 28, 130);
      doc.setFontSize(12);
      doc.text(`MMREA10191 `, 30, 149);
      doc.setFontSize(12);
      doc.text(`15th March 2021 `, 86, 149);
      window.open(doc.output("bloburl"));

      //   doc.save("certificate.pdf");
      //   doc.output("certificate.pdf");
    };

    G5();
  };

  return (
    <div>
      <button
        className="myButton"
        onClick={() =>
          handleDownload({
            name: "hari",
            courseName: "Reactjs",
          })
        }
      >
        Print
      </button>
    </div>
  );
};

export default Pdf;
