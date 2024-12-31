import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";
const port = config.port || 8000;

app.listen(port, async () => {
  console.log(`Server is listening on port http://localhost:${port}`);
  await connectDB();
});
