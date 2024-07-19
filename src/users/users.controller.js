"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var UsersController = function () {
    var _classDecorators = [(0, common_1.Controller)('users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _Add_decorators;
    var _FindAll_decorators;
    var _FindOne_decorators;
    var _Upadate_decorators;
    var _Delete_decorators;
    var _Search_decorators;
    var _Faker_decorators;
    var UsersController = _classThis = /** @class */ (function () {
        function UsersController_1(service) {
            this.service = (__runInitializers(this, _instanceExtraInitializers), service);
        }
        UsersController_1.prototype.Add = function (body) {
            return this.service.Add(body);
        };
        UsersController_1.prototype.FindAll = function () {
            return this.service.FindAll();
        };
        UsersController_1.prototype.FindOne = function (id) {
            return this.service.FindOne(id);
        };
        UsersController_1.prototype.Upadate = function (id, body) {
            return this.service.Update(id, body);
        };
        UsersController_1.prototype.Delete = function (id) {
            return this.service.Delete(id);
        };
        UsersController_1.prototype.Search = function (key) {
            return this.service.Search(key);
        };
        UsersController_1.prototype.Faker = function () {
            return this.service.Faker();
        };
        return UsersController_1;
    }());
    __setFunctionName(_classThis, "UsersController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _Add_decorators = [(0, common_1.Post)()];
        _FindAll_decorators = [(0, common_1.Get)()];
        _FindOne_decorators = [(0, common_1.Get)('/:id')];
        _Upadate_decorators = [(0, common_1.Put)('/:id')];
        _Delete_decorators = [(0, common_1.Delete)('/:id')];
        _Search_decorators = [(0, common_1.Post)('/search')];
        _Faker_decorators = [(0, common_1.Post)('/faker')];
        __esDecorate(_classThis, null, _Add_decorators, { kind: "method", name: "Add", static: false, private: false, access: { has: function (obj) { return "Add" in obj; }, get: function (obj) { return obj.Add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FindAll_decorators, { kind: "method", name: "FindAll", static: false, private: false, access: { has: function (obj) { return "FindAll" in obj; }, get: function (obj) { return obj.FindAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FindOne_decorators, { kind: "method", name: "FindOne", static: false, private: false, access: { has: function (obj) { return "FindOne" in obj; }, get: function (obj) { return obj.FindOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _Upadate_decorators, { kind: "method", name: "Upadate", static: false, private: false, access: { has: function (obj) { return "Upadate" in obj; }, get: function (obj) { return obj.Upadate; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _Delete_decorators, { kind: "method", name: "Delete", static: false, private: false, access: { has: function (obj) { return "Delete" in obj; }, get: function (obj) { return obj.Delete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _Search_decorators, { kind: "method", name: "Search", static: false, private: false, access: { has: function (obj) { return "Search" in obj; }, get: function (obj) { return obj.Search; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _Faker_decorators, { kind: "method", name: "Faker", static: false, private: false, access: { has: function (obj) { return "Faker" in obj; }, get: function (obj) { return obj.Faker; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersController = _classThis;
}();
exports.UsersController = UsersController;
