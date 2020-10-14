import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import path from "path";
import fs from "fs";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  const publicDir = path.resolve(process.cwd(), "./public");
  const filePath = path.join(publicDir, "files/test-file.txt");
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
  //   res.json({ message: "Hello Everyone!" });
}
