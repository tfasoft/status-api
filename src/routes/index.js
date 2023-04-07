import express from "express";

import servicesRoutes from "$routes/services/services.routes.js";

const appRouter = express();

appRouter.use("/services", servicesRoutes);

export default appRouter;
