import "./APSP.css";
import { nanoid } from "nanoid";
import Cards from "../PSP/Cards/PSPCards";

function APSP() {
  let apspItems = [
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YtdP5tbcseDSZi6jSRMjJyOIpLn3C-mX8773RU2MxdJzdyLdocWgMaBWBLphAKv8zIo&usqp=CAU",
      name: "Gangotri building",
    },
  ];

  return (
    <div className="apsp">
      <div className="apsp--title title">All Popular Service Products</div>
      <div className="apsp--construction construction">Construction</div>
      <div className="apsp--cards">
        {apspItems.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default APSP;
