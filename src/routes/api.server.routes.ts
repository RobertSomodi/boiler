'use strict';

import { getMetrics } from '../controllers/metrics.server.controller';

module.exports = function(app) {
    app.route('/metrics').get(getMetrics);
};
