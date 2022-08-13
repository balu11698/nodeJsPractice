const whiteList = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
