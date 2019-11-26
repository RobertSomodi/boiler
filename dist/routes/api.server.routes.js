'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const metrics_server_controller_1 = require("../controllers/metrics.server.controller");
module.exports = function (app) {
    app.route('/metrics').get(metrics_server_controller_1.getMetrics);
};
//# sourceMappingURL=api.server.routes.js.map