"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCacheManagerAuthState = exports.makeInMemoryStore = void 0;

// Fix: Load dengan try-catch untuk handle error
let makeCacheManagerStore;
try {
    makeCacheManagerStore = require("./make-cache-manager-store");
    if (makeCacheManagerStore && makeCacheManagerStore.default) {
        exports.makeCacheManagerAuthState = makeCacheManagerStore.default;
    }
} catch (error) {
    console.log("Warning: makeCacheManagerAuthState not available");
}

const make_in_memory_store_1 = require("./make-in-memory-store");
if (make_in_memory_store_1 && make_in_memory_store_1.default) {
    exports.makeInMemoryStore = make_in_memory_store_1.default;
}
