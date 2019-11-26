'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    app: {
        title: 'Node mongo ts container',
        description: 'Node mongo ts container',
        url: 'http://localhost:8095'
    },
    port: process.env.NODEJS_PORT || 8095,
    hostname: process.env.NODEJS_IP || 'localhost',
    toggle: {
        apidoc: process.env.TOGGLE_APIDOC || true,
        log: {
            files: process.env.ENABLE_LOG_FILE || false,
            console: process.env.ENABLE_CONSOLE || true
        }
    }
};
//# sourceMappingURL=config.js.map