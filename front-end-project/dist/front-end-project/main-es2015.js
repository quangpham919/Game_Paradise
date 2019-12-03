(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class='header-main-page' color='primary'>\n  <span class='title-welcome' [routerLink]=\"['/gamelobby']\" routerLinkActive=\"router-link-active\" > GamerParadise </span>\n  <span class=\"spacer\"></span>\n  <ul>\n    <li *ngIf=\"userIsAuthenticated\">\n          <a mat-button routerLink=\"/admin/main\" routerLinkActive=\"mat-accent\">Dashboard</a>\n    </li>\n    <li>\n      <a mat-button routerLink=\"/gamelobby\" routerLinkActive=\"mat-accent\">Lobby</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n        <a mat-button routerLink=\"/admin/login\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n        <a mat-button routerLink=\"/admin/register\" routerLinkActive=\"mat-accent\">Add new admin</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n        <a mat-button (click)=\"onLogout()\" routerLinkActive=\"mat-accent\">Logout</a>\n    </li>\n  </ul>\n</mat-toolbar>\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-game/add-game.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-game/add-game.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-card class='create-player'>\n      <section class=\"mat-typography\">\n          <h3 class=\"text-header\"><strong>Add a new game.</strong></h3>\n      </section>    \n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]='createForm' class='create-form'>\n       \n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Title of the game\" formControlName=\"title\" #title>\n        </mat-form-field>\n        \n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Genre of the game\" formControlName=\"genre\" #genre>\n        </mat-form-field>\n        \n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\" Game's platform\" formControlName=\"platform\" #platform>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Game's rating\" formControlName=\"rating\" #rating>\n        </mat-form-field>\n\n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Game's publisher\" formControlName=\"publisher\" #publisher>\n        </mat-form-field>\n\n        <mat-form-field class=\"field-full-width\">\n            <input matInput \n            placeholder=\"Release\" formControlName=\"release\" #release>\n        </mat-form-field>\n        <mat-form-field class=\"field-option\">\n                <mat-label>Status </mat-label>\n                <mat-select matNativeControl formControlName='status' #status>\n                  <mat-option value='Active'>Active</mat-option> \n                  <mat-option value='Inactive'>Inactive</mat-option>   \n                </mat-select> \n        </mat-form-field>\n  \n        <mat-divider></mat-divider>\n        <br><br>\n        <button class='btn-back' mat-raised-button color='accent' routerLink='/admin/main'>Back</button>\n        <button class='btn-submit' type='submit' (click)=\"addGame(title.value, platform.value, genre.value, rating.value, \n                                                                    publisher.value, release.value, status.value)\"\n                 [disabled]='createForm.pristine || createForm.invalid' mat-raised-button color='primary'>Save</button>\n        \n      </form>\n    </mat-card>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-player/add-player.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-player/add-player.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-card class='create-player'>\n    <section class=\"mat-typography\">\n        <h3 class=\"text-header\"><strong>Add a new player.</strong></h3>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]='createForm' class='create-form'>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Name of player\" formControlName=\"name\" #name>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-option\">\n          <mat-label>Rank</mat-label>\n          <mat-select formControlName='ranking' #ranking>\n            <mat-option *ngFor='let element of player_ranking'\n                        [value]=element>{{element}}\n            </mat-option>\n          </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Score\" formControlName=\"score\" #score>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Time\" formControlName=\"time\" #time>\n      </mat-form-field>\n      <div>\n      <mat-form-field class=\"field-full-width\">\n          <mat-label>Favorite Game: </mat-label>\n          <mat-select formControlName='favGame' #favGame>\n            <mat-option *ngFor='let element of listOfGames'\n                        [value]=element.title>{{element.title}}\n            </mat-option>    \n          </mat-select> \n      </mat-form-field>\n      </div>  \n      <mat-form-field class=\"field-option\">\n          <mat-label>Status </mat-label>\n          <mat-select formControlName='status' #status>\n            <mat-option value='Availalble'>Availalble</mat-option> \n            <mat-option value='Unavailalble'>Unavailalble</mat-option>   \n          </mat-select> \n      </mat-form-field>\n\n\n\n      <mat-divider></mat-divider>\n      <br><br>\n      <button class='btn-back' mat-raised-button color='accent' routerLink='/adminMainPage'>Back</button>\n      <button class='btn-submit' type='submit' (click)=\"addPlayer(name.value,ranking.value,score.value,time.value,status.value,favGame.value)\" [disabled]='createForm.pristine || createForm.invalid' mat-raised-button color='primary'>Create</button>\n      \n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-login/admin-login.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-login/admin-login.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <mat-card>\n    <mat-card-title>Admin Login</mat-card-title>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" #email/>\n          <mat-hint></mat-hint>\n          <mat-error *ngIf=\"\n                  emailFormControl.hasError('email') &&\n                  !emailFormControl.hasError('required')\n                \">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" [formControl]=\"passwordFormControl\"\n            [errorStateMatcher]=\"matcher\" #password />\n            <mat-hint>Min 8 characters | At least 1 uppercase letter | At least 1 digit</mat-hint>\n            <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <br>\n        <br>\n        <button mat-raised-button *ngIf=\"!isLoading\" color=\"accent\" type=\"submit\" (click)=\"login(email.value, password.value)\">Login</button>\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-main-page/admin-main-page.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-main-page/admin-main-page.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-stretch-tabs  class=\"main-dashboard\">\n<mat-tab class=\"player-tab\" label=\"Player\">\n<div>\n  <mat-card>\n    <mat-card-title>\n      <button mat-raised-button color=\"primary\" routerLink=\"/admin/add-player\">Add Player</button>\n    </mat-card-title>\n    <mat-card-content>\n       <mat-form-field>\n           <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"> \n      </mat-form-field> \n\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n          <ng-container  matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Player </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ranking\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Ranking </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ranking}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"score\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Score </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n          </ng-container> \n\n          <ng-container matColumnDef=\"time\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Time </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n          </ng-container>\n\n           <ng-container matColumnDef=\"game_played\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Games Played </th>\n              <td mat-cell *matCellDef=\"let element\"  >{{element.gamePlayed}}  </td>\n          </ng-container>  \n          \n          <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status  </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n          </ng-container>\n          \n          <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\">\n                <button mat-button color =\"primary\" (click)=\"editPlayer(element._id)\">Update</button> \n                <button mat-button color =\"warn\" (click)=\"deletePlayer(element._id)\">Delete</button>  \n              </td>\n          </ng-container> \n         \n        <tr mat-header-row *matHeaderRowDef=\"columns_to_display\"></tr>   \n        <tr mat-row *matRowDef=\"let row; columns: columns_to_display;\"></tr>\n        \n      </table>\n      <mat-paginator \n      [pageSize]=\"5\"\n      [pageSizeOptions]=\"[5, 10, 25]\"\n      [showFirstLastButtons]=\"true\">\n      </mat-paginator>\n      \n    </mat-card-content>\n  </mat-card>\n\n</div>\n\n</mat-tab>\n<mat-tab class=\"game-tab\" label=\"Game\">\n<app-game-configure></app-game-configure>\n</mat-tab>\n\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-register/admin-register.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-register/admin-register.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-card>\n      <mat-card-title>Add new admin</mat-card-title>\n      <mat-card-content>\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\" [errorStateMatcher]=\"matcher\" #name/>\n            <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n              Name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" #email/>\n            <mat-error *ngIf=\"\n                    emailFormControl.hasError('email') &&\n                    !emailFormControl.hasError('required')\n                  \">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" [formControl]=\"passwordFormControl\"\n              [errorStateMatcher]=\"matcher\" #password />\n            <mat-hint>Min 8 characters | At least 1 uppercase letter | At least 1 digit</mat-hint>\n            <mat-error *ngIf=\"passwordFormControl.hasError('pattern')\">\n              Password must be at least <strong>8 characters</strong>\n              <br>\n              Password must have at least <strong>1 uppercase letter</strong>\n              <br>\n              Password must have at least <strong>1 number</strong>\n            </mat-error>\n            <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <br>\n          <br>\n          <br>\n          <button mat-raised-button color=\"accent\" *ngIf=\"!isLoading\" type=\"submit\" (click)=\"register(name.value, email.value, password.value)\">Sign Up</button>\n          <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/edit-player/edit-player.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/edit-player/edit-player.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-card class='update-player'>\n      <section class=\"mat-typography\">\n          <h3 class=\"text-header\"><strong>Update this player.</strong></h3>\n      </section>\n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]='updateForm' class='update-form'>\n\n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Name of player\" formControlName=\"name\" #name>\n        </mat-form-field>\n\n        <mat-form-field class=\"field-option\">\n            <mat-label>Player's ranking</mat-label>\n            <mat-select formControlName='ranking' [(value)]=\"this.old_ranking\" #ranking>\n              <mat-option *ngFor='let element of player_ranking'\n                          [value]=element> {{element}}\n              </mat-option>    \n            </mat-select> \n        </mat-form-field>\n        \n        <mat-form-field class=\"field-full-width\">\n            <input  matInput placeholder=\"Score\" formControlName=\"score\" disabled #score>\n        </mat-form-field>\n        \n        <mat-form-field class=\"field-full-width\">\n            <input matInput placeholder=\"Time\" formControlName=\"time\" #time>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n            <mat-label>Favorite Game: </mat-label>\n            <mat-select formControlName='favGame' [(value)]='this.old_favGame' #favGame>\n              <mat-option *ngFor='let element of listOfGames'\n                          [value]=element.title>{{element.title}}\n              </mat-option>    \n            </mat-select> \n        </mat-form-field>\n\n\n        <mat-form-field class=\"field-full-width\">\n          <mat-label>Choose game had been played: </mat-label>\n          <mat-select formControlName='game_played' [(value)]='this.old_gamePlayed' #game_played>\n            <mat-option *ngFor='let element of listOfGames'\n                        [value]=element.title>{{element.title}} </mat-option>    \n          </mat-select> \n        </mat-form-field>\n  \n        <mat-form-field class=\"field-option\">\n            <mat-label>Status </mat-label>\n            <mat-select formControlName='status' [(value)]='old_status' #status>\n              <mat-option value='Available'>Available</mat-option> \n              <mat-option value='Unavailable'>Unavailable</mat-option>   \n            </mat-select> \n        </mat-form-field>\n        \n        <mat-divider></mat-divider>\n        <br><br>\n        <button class='btn-back' mat-raised-button color='accent' routerLink='/admin/main'>Back</button>\n        <button class='btn-submit' type='submit' (click)=\"updatePlayer(name.value,ranking.value,score.value,time.\n                                                          value,status.value,favGame.value,game_played.value)\" \n        [disabled]='updateForm.pristine || updateForm.invalid' mat-raised-button color='primary' >Update</button>\n        \n      </form>\n    </mat-card>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/game-configure/game-configure.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/game-configure/game-configure.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-card>\n      <mat-card-title>\n        <button mat-raised-button color=\"primary\" routerLink=\"/admin/add_game\">Add Game</button>\n      </mat-card-title>\n      <mat-card-content>\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            <ng-container  matColumnDef=\"Title\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"Platform\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Platform </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.platform}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"Genre\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Genre </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.genre}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Rating\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Rating </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.rating}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Publisher\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.publisher}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"Release\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Release </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.release}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"Status\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header > Status </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n            </ng-container>\n           \n          <tr mat-header-row *matHeaderRowDef=\"columns_to_display\"></tr>   \n          <tr mat-row *matRowDef=\"let row; columns: columns_to_display;\"></tr>\n          <ng-container matColumnDef=\"Action\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\">\n                <button mat-button color =\"primary\" (click)= 'editGame(element._id)'  >Update</button> \n                <button mat-button color =\"warn\" (click) = \"deleteGame(element._id)\" >Delete</button>  \n              </td>\n          </ng-container> \n        </table>\n        <mat-paginator \n        [pageSize]=\"5\"\n        [pageSizeOptions]=\"[5, 10, 25]\"\n        [showFirstLastButtons]=\"true\">\n        </mat-paginator>\n      </mat-card-content>\n    </mat-card>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/update-game/update-game.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/update-game/update-game.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-card class='update-game'>\n    <section class=\"mat-typography\">\n        <h3 class=\"text-header\"><strong>Update this game.</strong></h3>\n    </section>    \n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]='updateForm' class='update-form'>\n     \n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Title of the game\" formControlName=\"title\" #title>\n      </mat-form-field>\n      \n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Genre of the game\" formControlName=\"genre\" #genre>\n      </mat-form-field>\n      \n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\" Game's platform\" formControlName=\"platform\" #platform>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Game's rating\" formControlName=\"rating\" #rating>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Game's publisher\" formControlName=\"publisher\" #publisher>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n          <input matInput \n          placeholder=\"Release\" formControlName=\"release\" #release>\n      </mat-form-field>\n      \n      <mat-form-field class = \"field-half-width\">\n        <mat-label>Status:  </mat-label>\n        <mat-select formControlName='status' [(value)] = 'this.old_status' #status>\n          <mat-option value = 'Active'> Active</mat-option>\n          <mat-option value = 'Inactive'> Inactive</mat-option>\n        </mat-select> \n\n      </mat-form-field>\n\n\n      <mat-divider></mat-divider>\n      <br><br>\n      <button class='btn-back' mat-raised-button color='accent' routerLink='/admin/main'>Back</button>\n      <button class='btn-submit' type='submit' (click)=\"updateGame(title.value,platform.value,genre.value,rating.value,publisher.value,release.value,status.value)\" [disabled]='updateForm.pristine || updateForm.invalid' mat-raised-button color='primary'>Update</button>\n      \n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/join-game/join-game.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/join-game/join-game.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-card class='join-game'>\n        <mat-divider></mat-divider>\n        <br>\n        <form [formGroup]='joinGame' class='join-game-form'>\n         \n          <mat-form-field class=\"field-half-width\">\n              <mat-label>Name: </mat-label>\n              <input matInput [value]=\"Player.name\" formControlName=\"name\" readonly >\n          </mat-form-field>\n          \n          <mat-form-field class=\"field-half-width\">\n              <mat-label>Ranking: </mat-label>\n              <input matInput [value]=\"Player.ranking\" formControlName=\"ranking\"  readonly >\n          </mat-form-field>\n          \n          <mat-form-field class=\"field-half-width\">\n              <mat-label>Score: </mat-label>\n              <input matInput [value]=\"Player.score\" formControlName=\"score\" readonly>\n          </mat-form-field>\n          \n          <mat-form-field class=\"field-hafl-width\">\n              <mat-label>Time: </mat-label>\n              <input matInput [value]=\"Player.time\" formControlName=\"time\" readonly>\n          </mat-form-field>\n    \n          <mat-form-field class=\"field-half-width\">\n              <mat-label>Favorite Game: </mat-label>\n              <input matInput [value]=\"Player.favGame\" formControlName=\"favGame\" readonly>\n          </mat-form-field>\n  \n          <mat-form-field class=\"field-half-width\">\n            <mat-label>Please pick game to play: </mat-label>\n            <mat-select formControlName='game_played' #game_played>\n              <mat-option *ngFor='let element of listOfGames'\n                          [value]=element.title>{{element.title}} </mat-option>    \n            </mat-select> \n          </mat-form-field>\n          \n          <mat-divider></mat-divider>\n          <br><br>\n          <button class='btn-back' mat-raised-button color='accent' routerLink='/gamelobby' >Back</button>\n          <button class='btn-submit' type='submit' (click)=\"JoinGame(game_played.value)\" [disabled]='joinGame.pristine || joinGame.invalid' mat-raised-button color='primary' >Join </button>\n          \n        </form>\n      </mat-card>\n</div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/player-ranking/player-ranking.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/player-ranking/player-ranking.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-stretch-tabs  class=\"main-dashboard\">\n      \n    <mat-tab class=\"player-tab\" label=\"Gamer Paradise Honour List\">\n    <div>\n    <mat-card>\n      <mat-card-content>\n         <mat-form-field>\n             <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"> \n        </mat-form-field> \n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            \n            <ng-container  matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header > Player </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"ranking\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header >Ranking </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.ranking}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"score\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Score </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n            </ng-container> \n  \n            <ng-container matColumnDef=\"time\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Time </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n            </ng-container>\n  \n             <ng-container matColumnDef=\"game_played\">\n                <th mat-header-cell *matHeaderCellDef  mat-sort-header> Games Played </th>\n                <td mat-cell *matCellDef=\"let element\"  >{{element.gamePlayed}}  </td>\n            </ng-container>  \n            \n            <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef  mat-sort-header> Status  </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"button\">\n                \n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Action </th>\n                <td mat-cell *matCellDef=\"let element\" >\n                    \n                <button mat-raised-button color =\"primary\" *ngIf=\"element.status=='Available'\" (click)=\"joinGame(element._id)\">Join Game</button> \n                <button mat-flat-button  *ngIf=\"element.status!='Available'\"disabled>In Game</button>   \n                </td> \n             </ng-container>\n           \n          <tr mat-header-row *matHeaderRowDef=\"columns_to_display  \"></tr>   \n          <tr mat-row *matRowDef=\"let row; columns: columns_to_display \"></tr>  \n        \n        </table>  \n        <mat-paginator \n              [pageSize]=\"5\"\n              [pageSizeOptions]=\"[5, 10, 25]\"\n              [showFirstLastButtons]=\"true\">\n        </mat-paginator>\n      </mat-card-content>\n    </mat-card>\n   </div>\n   </mat-tab>\n  </mat-tab-group>\n  \n  \n \n ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_guest_player_ranking_player_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/guest/player-ranking/player-ranking.component */ "./src/app/components/guest/player-ranking/player-ranking.component.ts");
/* harmony import */ var _components_guest_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/guest/join-game/join-game.component */ "./src/app/components/guest/join-game/join-game.component.ts");
/* harmony import */ var _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin-login/admin-login.component */ "./src/app/components/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_admin_main_page_admin_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin-main-page/admin-main-page.component */ "./src/app/components/admin/admin-main-page/admin-main-page.component.ts");
/* harmony import */ var _components_admin_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/add-player/add-player.component */ "./src/app/components/admin/add-player/add-player.component.ts");
/* harmony import */ var _components_admin_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/edit-player/edit-player.component */ "./src/app/components/admin/edit-player/edit-player.component.ts");
/* harmony import */ var _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin-register/admin-register.component */ "./src/app/components/admin/admin-register/admin-register.component.ts");
/* harmony import */ var _components_admin_update_game_update_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/update-game/update-game.component */ "./src/app/components/admin/update-game/update-game.component.ts");
/* harmony import */ var _components_admin_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/add-game/add-game.component */ "./src/app/components/admin/add-game/add-game.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");













const appRoutes = [
    { path: '**', redirectTo: '404' },
    { path: 'admin/login', component: _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] },
    { path: 'admin/register', component: _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_9__["AdminRegisterComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/add_game', component: _components_admin_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_11__["AddGameComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/update_game/:id', component: _components_admin_update_game_update_game_component__WEBPACK_IMPORTED_MODULE_10__["UpdateGameComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/add-player', component: _components_admin_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_7__["AddPlayerComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/update_player/:id', component: _components_admin_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_8__["EditPlayerComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/main', component: _components_admin_admin_main_page_admin_main_page_component__WEBPACK_IMPORTED_MODULE_6__["AdminMainPageComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'join_game/:id', component: _components_guest_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_4__["JoinGameComponent"] },
    { path: 'gamelobby', component: _components_guest_player_ranking_player_ranking_component__WEBPACK_IMPORTED_MODULE_3__["PlayerRankingComponent"] },
    { path: '', redirectTo: '/gamelobby', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n\n.title-welcome{\n  color:white;\n  font-family: 'Bebas Neue', cursive;\n  text-align: left;\n\n}\n\n.header-main-page{\n  background-color:primary;\n}\n\nul li{\n  text-decoration: none;\n  list-style: none;\n  margin:0;\n  padding:0;\n}\n\nul{\n  display: flex;\n}\n\n.spacer{\n  flex:1 1 auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xuXG4udGl0bGUtd2VsY29tZXtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi5oZWFkZXItbWFpbi1wYWdle1xuICBiYWNrZ3JvdW5kLWNvbG9yOnByaW1hcnk7XG59XG51bCBsaXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xufVxuXG51bHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zcGFjZXJ7XG4gIGZsZXg6MSAxIGF1dG87XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



let AppComponent = class AppComponent {
    // Inject authService
    constructor(authService) {
        this.authService = authService;
        this.title = 'front-end-project';
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
        this.userIsAuthenticated = this.authService.getAuthStatus();
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_guest_player_ranking_player_ranking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/guest/player-ranking/player-ranking.component */ "./src/app/components/guest/player-ranking/player-ranking.component.ts");
/* harmony import */ var _components_guest_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/guest/join-game/join-game.component */ "./src/app/components/guest/join-game/join-game.component.ts");
/* harmony import */ var _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin-login/admin-login.component */ "./src/app/components/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_admin_main_page_admin_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin-main-page/admin-main-page.component */ "./src/app/components/admin/admin-main-page/admin-main-page.component.ts");
/* harmony import */ var _components_admin_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/add-player/add-player.component */ "./src/app/components/admin/add-player/add-player.component.ts");
/* harmony import */ var _components_admin_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/edit-player/edit-player.component */ "./src/app/components/admin/edit-player/edit-player.component.ts");
/* harmony import */ var _components_admin_game_configure_game_configure_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/game-configure/game-configure.component */ "./src/app/components/admin/game-configure/game-configure.component.ts");
/* harmony import */ var _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/admin-register/admin-register.component */ "./src/app/components/admin/admin-register/admin-register.component.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_admin_update_game_update_game_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/update-game/update-game.component */ "./src/app/components/admin/update-game/update-game.component.ts");
/* harmony import */ var _components_admin_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/add-game/add-game.component */ "./src/app/components/admin/add-game/add-game.component.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth-interceptor */ "./src/app/services/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
















// import { AddGameComponent } from './components/admin/add-game/add-game.component';
// import { UpdateGameComponent } from './components/admin/update-game/update-game.component';









;
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_guest_player_ranking_player_ranking_component__WEBPACK_IMPORTED_MODULE_8__["PlayerRankingComponent"],
            _components_guest_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_9__["JoinGameComponent"],
            _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"],
            _components_admin_admin_main_page_admin_main_page_component__WEBPACK_IMPORTED_MODULE_11__["AdminMainPageComponent"],
            _components_admin_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_12__["AddPlayerComponent"],
            _components_admin_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_13__["EditPlayerComponent"],
            _components_admin_game_configure_game_configure_component__WEBPACK_IMPORTED_MODULE_14__["GameConfigureComponent"],
            _components_admin_update_game_update_game_component__WEBPACK_IMPORTED_MODULE_20__["UpdateGameComponent"],
            _components_admin_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_15__["AdminRegisterComponent"],
            _components_admin_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_21__["AddGameComponent"]
        ],
        providers: [_services_player_service__WEBPACK_IMPORTED_MODULE_16__["PlayerService"], _services_game_service__WEBPACK_IMPORTED_MODULE_18__["GameService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptor"], multi: true }, _services_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_23__["ErrorInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/add-game/add-game.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin/add-game/add-game.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n.mat-typography{\n text-align: center;\n font-family: '';\n}\n.text-header{\n  font-family: 'Bebas Neue', cursive;\n}\n.create-form{\n  min-width: 250px;\n  width: 100%;\n}\n.field-full-width{\n  width:100%;\n}\n.create-player{\n  margin: 50px 50px 50px 50px;\n}\n.btn-back{\n  width:50%;\n}\n.btn-submit{\n  width:50%;\n}\n.field-option{\n  width: 15%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtZ2FtZS9hZGQtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtZ2FtZS9hZGQtZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xuLm1hdC10eXBvZ3JhcGh5e1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBmb250LWZhbWlseTogJyc7XG59XG4udGV4dC1oZWFkZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XG59XG4uY3JlYXRlLWZvcm17XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpZWxkLWZ1bGwtd2lkdGh7XG4gIHdpZHRoOjEwMCU7XG59XG4uY3JlYXRlLXBsYXllcntcbiAgbWFyZ2luOiA1MHB4IDUwcHggNTBweCA1MHB4O1xufVxuLmJ0bi1iYWNre1xuICB3aWR0aDo1MCU7XG59XG4uYnRuLXN1Ym1pdHtcbiAgd2lkdGg6NTAlO1xufVxuLmZpZWxkLW9wdGlvbntcbiAgd2lkdGg6IDE1JTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/add-game/add-game.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/add-game/add-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGameComponent", function() { return AddGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddGameComponent = class AddGameComponent {
    constructor(gameService, router, formBuilder) {
        this.gameService = gameService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.createForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            platform: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            genre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            publisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            release: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    addGame(title, platform, genre, rating, publisher, release, status) {
        this.gameService.addGame(title, platform, genre, rating, publisher, release, status);
    }
};
AddGameComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-game/add-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-game.component.css */ "./src/app/components/admin/add-game/add-game.component.css")).default]
    })
], AddGameComponent);



/***/ }),

/***/ "./src/app/components/admin/add-player/add-player.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/add-player/add-player.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n.mat-typography{\n text-align: center;\n font-family: '';\n}\n.text-header{\n  font-family: 'Bebas Neue', cursive;\n}\n.create-form{\n  min-width: 250px;\n  width: 100%;\n}\n.field-full-width{\n  width:100%;\n}\n.create-player{\n  margin: 50px 50px 50px 50px;\n}\n.btn-back{\n  width:50%;\n}\n.btn-submit{\n  width:50%;\n}\n.field-option{\n  width: 15%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtcGxheWVyL2FkZC1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUU7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRkLXBsYXllci9hZGQtcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7XG4ubWF0LXR5cG9ncmFwaHl7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIGZvbnQtZmFtaWx5OiAnJztcbn1cbi50ZXh0LWhlYWRlcntcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcbn1cbi5jcmVhdGUtZm9ybXtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmllbGQtZnVsbC13aWR0aHtcbiAgd2lkdGg6MTAwJTtcbn1cbi5jcmVhdGUtcGxheWVye1xuICBtYXJnaW46IDUwcHggNTBweCA1MHB4IDUwcHg7XG59XG4uYnRuLWJhY2t7XG4gIHdpZHRoOjUwJTtcbn1cbi5idG4tc3VibWl0e1xuICB3aWR0aDo1MCU7XG59XG4uZmllbGQtb3B0aW9ue1xuICB3aWR0aDogMTUlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/admin/add-player/add-player.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/add-player/add-player.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function() { return AddPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddPlayerComponent = class AddPlayerComponent {
    constructor(gameService, playerService, formBuilder, router) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.player_ranking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.fetchGame();
        this.createForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ranking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            score: ['',],
            favGame: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            time: [''],
            status: ['',]
        });
    }
    addPlayer(name, ranking, score, time, status, favGame) {
        this.playerService.addPlayer(name, ranking, score, time, status, favGame).subscribe(() => {
            this.router.navigate(['/admin/main']);
        });
    }
    fetchGame() {
        this.gameService
            .getGames()
            .subscribe((data) => {
            this.listOfGames = data;
            console.log("Requested game....");
            console.log(this.listOfGames);
        });
    }
    ngOnInit() {
    }
};
AddPlayerComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-player/add-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-player.component.css */ "./src/app/components/admin/add-player/add-player.component.css")).default]
    })
], AddPlayerComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-login/admin-login.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/admin-login/admin-login.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 300px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.container{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10%;\n  width:100%\n}\n\n.container div{\n  width: 400px;\n  height: 100px;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHdpZHRoOjEwMCVcbn1cblxuLmNvbnRhaW5lciBkaXZ7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/admin/admin-login/admin-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-login/admin-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomErrorMatcher, AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorMatcher", function() { return CustomErrorMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class CustomErrorMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let AdminLoginComponent = class AdminLoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.isLoading = false;
        // Create an email form control
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        // Create a password form control
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.{8,})')
        ]);
        // Create an instance of CustomErrorMatcher class
        this.matcher = new CustomErrorMatcher();
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    login(email, password) {
        this.isLoading = true;
        this.authService.login(email, password);
    }
    ;
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-login/admin-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-login.component.css */ "./src/app/components/admin/admin-login/admin-login.component.css")).default]
    })
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-main-page/admin-main-page.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/admin-main-page/admin-main-page.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-dashboard{\n  margin: 50px 40px 50px 50px;\n}\n\ntable{\n  align-content: center;\n  align-items: center;\n  width:100%;\n  \n}\n\n.mat-form-field{\n  font-size:14px;\n  width:100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1tYWluLXBhZ2UvYWRtaW4tbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1tYWluLXBhZ2UvYWRtaW4tbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kYXNoYm9hcmR7XG4gIG1hcmdpbjogNTBweCA0MHB4IDUwcHggNTBweDtcbn1cblxudGFibGV7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6MTAwJTtcbiAgXG59XG5cbi5tYXQtZm9ybS1maWVsZHtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHdpZHRoOjEwMCU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/admin/admin-main-page/admin-main-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-main-page/admin-main-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainPageComponent", function() { return AdminMainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");






let AdminMainPageComponent = class AdminMainPageComponent {
    constructor(playerService, router, gameService) {
        this.playerService = playerService;
        this.router = router;
        this.gameService = gameService;
        this.columns_to_display = ['name', 'ranking', 'score', 'time', 'game_played', 'status', 'action'];
        this.Player = [];
        this.fetchPlayer();
    }
    ngOnInit() {
    }
    fetchPlayer() {
        this.playerService
            .getPlayers()
            .subscribe((data) => {
            this.Player = data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.Player);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(value) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    editPlayer(id) {
        this.router.navigate([`admin/update_player/${id}`]);
    }
    deletePlayer(id) {
        this.playerService.deletePlayer(id).subscribe(() => {
            this.fetchPlayer();
        });
    }
};
AdminMainPageComponent.ctorParameters = () => [
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminMainPageComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], AdminMainPageComponent.prototype, "paginator", void 0);
AdminMainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-main-page/admin-main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-main-page.component.css */ "./src/app/components/admin/admin-main-page/admin-main-page.component.css")).default]
    })
], AdminMainPageComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-register/admin-register.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/admin-register/admin-register.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 300px;\n    max-width: 800px;\n    width: 100%;\n  }\n  \n  .container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10%;\n    width:100%\n  }\n  \n  .container div{\n    width: 400px;\n    height: 100px;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1yZWdpc3Rlci9hZG1pbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Y7RUFDRjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLXJlZ2lzdGVyL2FkbWluLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB3aWR0aDoxMDAlXG4gIH1cbiAgXG4gIC5jb250YWluZXIgZGl2e1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admin-register/admin-register.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-register/admin-register.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomErrorMatcher, AdminRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorMatcher", function() { return CustomErrorMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisterComponent", function() { return AdminRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






class CustomErrorMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let AdminRegisterComponent = class AdminRegisterComponent {
    constructor(router, authService, snackBar) {
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.isLoading = false;
        this.hide = true;
        // Create name form control
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        // Create an email form control
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        // Create a password form control
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})')
        ]);
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    register(name, email, password) {
        this.isLoading = true;
        this.authService.register(name, email, password);
    }
    ;
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
AdminRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AdminRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-register/admin-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-register.component.css */ "./src/app/components/admin/admin-register/admin-register.component.css")).default]
    })
], AdminRegisterComponent);



/***/ }),

/***/ "./src/app/components/admin/edit-player/edit-player.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/edit-player/edit-player.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n.mat-typography{\n text-align: center;\n font-family: '';\n}\n.text-header{\n  font-family: 'Bebas Neue', cursive;\n}\n.update-form{\n  min-width: 250px;\n  width: 100%;\n}\n.field-full-width{\n  width:100%;\n}\n.create-player{\n  margin: 50px 50px 50px 50px;\n}\n.btn-back{\n  width:50%;\n}\n.btn-submit{\n  width:50%;\n}\n.field-option{\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9lZGl0LXBsYXllci9lZGl0LXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9lZGl0LXBsYXllci9lZGl0LXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xuLm1hdC10eXBvZ3JhcGh5e1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBmb250LWZhbWlseTogJyc7XG59XG4udGV4dC1oZWFkZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XG59XG4udXBkYXRlLWZvcm17XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQtZnVsbC13aWR0aHtcbiAgd2lkdGg6MTAwJTtcbn1cbi5jcmVhdGUtcGxheWVye1xuICBtYXJnaW46IDUwcHggNTBweCA1MHB4IDUwcHg7XG59XG4uYnRuLWJhY2t7XG4gIHdpZHRoOjUwJTtcbn1cbi5idG4tc3VibWl0e1xuICB3aWR0aDo1MCU7XG59XG4uZmllbGQtb3B0aW9ue1xuICB3aWR0aDogMTUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/admin/edit-player/edit-player.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/edit-player/edit-player.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlayerComponent", function() { return EditPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let EditPlayerComponent = class EditPlayerComponent {
    constructor(gameService, playerService, router, route, snackBar, formBuilder) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.Player = {};
        this.player_ranking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.createForm();
        this.fetchGame();
    }
    createForm() {
        this.updateForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ranking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            favGame: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            game_played: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.playerService.getPlayerById(this.id).subscribe(res => {
                console.log(res);
                this.Player = res;
                this.updateForm.get('name').setValue(this.Player.name);
                this.updateForm.get('ranking').setValue(this.Player.ranking);
                this.updateForm.get('score').setValue(this.Player.score);
                this.updateForm.get('time').setValue(this.Player.time);
                this.updateForm.get('favGame').setValue(this.Player.favGame);
                this.updateForm.get('status').setValue(this.Player.status);
                this.updateForm.get('game_played').setValue(this.Player.status);
                this.old_ranking = this.Player.ranking;
                this.old_status = this.Player.status;
                this.old_favGame = this.Player.favGame;
                this.old_gamePlayed = this.Player.gamePlayed;
            });
        });
    }
    fetchGame() {
        this.gameService
            .getGames()
            .subscribe((data) => {
            this.listOfGames = data;
        });
    }
    updatePlayer(name, ranking, score, time, status, favGame, gamePlayed) {
        this.playerService.updatePlayer(name, ranking, score, time, status, favGame, this.id, gamePlayed).subscribe(() => {
            this.snackBar.open("Player has been updated successfully!!!", "OK", {
                duration: 3000
            });
            this.router.navigate(['/admin/main']);
        });
    }
};
EditPlayerComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/edit-player/edit-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-player.component.css */ "./src/app/components/admin/edit-player/edit-player.component.css")).default]
    })
], EditPlayerComponent);



/***/ }),

/***/ "./src/app/components/admin/game-configure/game-configure.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/game-configure/game-configure.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\n  align-content: center;\n  align-items: center;\n  width:100%;\n  \n}\n\n.mat-form-field{\n  font-size:14px;\n  width:100%;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9nYW1lLWNvbmZpZ3VyZS9nYW1lLWNvbmZpZ3VyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVOztBQUVaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZ2FtZS1jb25maWd1cmUvZ2FtZS1jb25maWd1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIFxufVxuXG4ubWF0LWZvcm0tZmllbGR7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICB3aWR0aDoxMDAlO1xufVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/admin/game-configure/game-configure.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/game-configure/game-configure.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameConfigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfigureComponent", function() { return GameConfigureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");






let GameConfigureComponent = class GameConfigureComponent {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.game_to_display = [];
        this.columns_to_display = ['Title', 'Platform', 'Genre', 'Rating', 'Publisher', 'Release', 'Status', 'Action'];
        this.fetchGame();
    }
    ngOnInit() {
    }
    fetchGame() {
        this.gameService
            .getGames()
            .subscribe((data) => {
            this.game_to_display = data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.game_to_display);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    editGame(id) {
        this.router.navigate([`/admin/update_game/${id}`]);
    }
    deleteGame(id) {
        this.gameService.deleteGame(id).subscribe(() => {
            this.fetchGame();
        });
    }
    //Apply filter for filter bar in html page
    applyFilter(value) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
};
GameConfigureComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], GameConfigureComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], GameConfigureComponent.prototype, "paginator", void 0);
GameConfigureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-configure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-configure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/game-configure/game-configure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-configure.component.css */ "./src/app/components/admin/game-configure/game-configure.component.css")).default]
    })
], GameConfigureComponent);



/***/ }),

/***/ "./src/app/components/admin/update-game/update-game.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/update-game/update-game.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n.mat-typography{\n text-align: center;\n font-family: '';\n}\n.text-header{\n  font-family: 'Bebas Neue', cursive;\n}\n.update-form{\n  min-width: 250px;\n  width: 100%;\n}\n.field-full-width{\n  width:100%;\n}\n.update-game{\n  margin: 50px 50px 50px 50px;\n}\n.btn-back{\n  width:50%;\n}\n.btn-submit{\n  width:50%;\n}\n.field-half-width{\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi91cGRhdGUtZ2FtZS91cGRhdGUtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi91cGRhdGUtZ2FtZS91cGRhdGUtZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xuLm1hdC10eXBvZ3JhcGh5e1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBmb250LWZhbWlseTogJyc7XG59XG4udGV4dC1oZWFkZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XG59XG4udXBkYXRlLWZvcm17XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQtZnVsbC13aWR0aHtcbiAgd2lkdGg6MTAwJTtcbn1cbi51cGRhdGUtZ2FtZXtcbiAgbWFyZ2luOiA1MHB4IDUwcHggNTBweCA1MHB4O1xufVxuLmJ0bi1iYWNre1xuICB3aWR0aDo1MCU7XG59XG4uYnRuLXN1Ym1pdHtcbiAgd2lkdGg6NTAlO1xufVxuLmZpZWxkLWhhbGYtd2lkdGh7XG4gIHdpZHRoOiAxNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/admin/update-game/update-game.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/update-game/update-game.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGameComponent", function() { return UpdateGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");






let UpdateGameComponent = class UpdateGameComponent {
    constructor(gameService, router, route, snackBar, formBuilder) {
        this.gameService = gameService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.Game = {};
        this.createFrom();
    }
    createFrom() {
        this.updateForm = this.formBuilder.group({
            title: ['',],
            platform: ['',],
            genre: ['',],
            rating: ['',],
            publisher: ['',],
            release: ['',],
            status: ['',]
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.gameService.getGameById(this.id).subscribe(res => {
                this.Game = res;
                this.updateForm.get('title').setValue(this.Game.title);
                this.updateForm.get('platform').setValue(this.Game.platform);
                this.updateForm.get('genre').setValue(this.Game.genre);
                this.updateForm.get('rating').setValue(this.Game.rating);
                this.updateForm.get('publisher').setValue(this.Game.publisher);
                this.updateForm.get('release').setValue(this.Game.release);
                this.updateForm.get('status').setValue(this.Game.status);
                this.old_status = this.Game.status;
            });
        });
    }
    updateGame(title, platform, genre, rating, publisher, release, status) {
        this.gameService.updateGame(title, platform, genre, rating, publisher, release, status, this.id).subscribe(() => {
            this.router.navigate(['/admin/main']);
            this.snackBar.open("Game has been updated successfully!!!", "OK", {
                duration: 3000
            });
        });
    }
};
UpdateGameComponent.ctorParameters = () => [
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
UpdateGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/update-game/update-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-game.component.css */ "./src/app/components/admin/update-game/update-game.component.css")).default]
    })
], UpdateGameComponent);



/***/ }),

/***/ "./src/app/components/guest/join-game/join-game.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/guest/join-game/join-game.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');\n\n.text-header{\n  font-family: 'Bebas Neue', cursive;\n}\n\n.join-game-form{\n  min-width: 250px;\n  width: 100%;\n}\n\n.field-half-width{\n  width:100%;\n}\n\n.join-game{\n  margin: 80px 50px 80px 50px;\n}\n\n.btn-back{\n  width:50%;\n}\n\n.btn-submit{\n  width:50%;\n}\n\n.field-option{\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ndWVzdC9qb2luLWdhbWUvam9pbi1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2d1ZXN0L2pvaW4tZ2FtZS9qb2luLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTtcblxuLnRleHQtaGVhZGVye1xuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xufVxuLmpvaW4tZ2FtZS1mb3Jte1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkLWhhbGYtd2lkdGh7XG4gIHdpZHRoOjEwMCU7XG59XG4uam9pbi1nYW1le1xuICBtYXJnaW46IDgwcHggNTBweCA4MHB4IDUwcHg7XG59XG4uYnRuLWJhY2t7XG4gIHdpZHRoOjUwJTtcbn1cbi5idG4tc3VibWl0e1xuICB3aWR0aDo1MCU7XG59XG4uZmllbGQtb3B0aW9ue1xuICB3aWR0aDogMTUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/guest/join-game/join-game.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/guest/join-game/join-game.component.ts ***!
  \*******************************************************************/
/*! exports provided: JoinGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function() { return JoinGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let JoinGameComponent = class JoinGameComponent {
    constructor(gameService, playerService, router, route, snackBar, formBuilder) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.Player = {};
        this.fetchGame();
        this.joinGame = this.formBuilder.group({
            name: [''],
            ranking: [''],
            score: [''],
            time: [''],
            favGame: [''],
            game_played: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.playerService.getPlayerById(this.id).subscribe(res => {
                this.Player = res;
            });
        });
    }
    fetchGame() {
        this.gameService
            .getGames()
            .subscribe((data) => {
            this.listOfGames = data;
        });
    }
    JoinGame(gameTitle) {
        let status = "Unavailable";
        this.playerService.joinGame(status, gameTitle, this.id).subscribe(() => {
            this.router.navigate(['/gamelobby']);
            this.snackBar.open("Please waitting to load game !!!", "OK", {
                duration: 3000
            });
        });
    }
};
JoinGameComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
JoinGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-join-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./join-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/join-game/join-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./join-game.component.css */ "./src/app/components/guest/join-game/join-game.component.css")).default]
    })
], JoinGameComponent);



/***/ }),

/***/ "./src/app/components/guest/player-ranking/player-ranking.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/guest/player-ranking/player-ranking.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-dashboard{\n  margin: 50px 50px 50px 50px;\n}\n\ntable{\n  align-content: center;\n  align-items: center;\n  width:100%;\n  \n}\n\n.mat-form-field{\n  font-size:14px;\n  width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ndWVzdC9wbGF5ZXItcmFua2luZy9wbGF5ZXItcmFua2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVOztBQUVaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3Vlc3QvcGxheWVyLXJhbmtpbmcvcGxheWVyLXJhbmtpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRhc2hib2FyZHtcbiAgbWFyZ2luOiA1MHB4IDUwcHggNTBweCA1MHB4O1xufVxuXG50YWJsZXtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDoxMDAlO1xuICBcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICBmb250LXNpemU6MTRweDtcbiAgd2lkdGg6MTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/guest/player-ranking/player-ranking.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/guest/player-ranking/player-ranking.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PlayerRankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRankingComponent", function() { return PlayerRankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");







let PlayerRankingComponent = class PlayerRankingComponent {
    constructor(playerService, gameService, router, route) {
        this.playerService = playerService;
        this.gameService = gameService;
        this.router = router;
        this.route = route;
        this.columns_to_display = ['name', 'ranking', 'score', 'time', 'game_played', 'status', 'button'];
        this.Player_to_display = [];
        this.fetchTable();
    }
    ngOnInit() {
    }
    fetchTable() {
        this.playerService
            .getPlayers()
            .subscribe((data) => {
            this.Player_to_display = data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.Player_to_display);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(value) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    joinGame(id) {
        this.router.navigate([`/join_game/${id}`]);
    }
};
PlayerRankingComponent.ctorParameters = () => [
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], PlayerRankingComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], PlayerRankingComponent.prototype, "paginator", void 0);
PlayerRankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-ranking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-ranking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guest/player-ranking/player-ranking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-ranking.component.css */ "./src/app/components/guest/player-ranking/player-ranking.component.css")).default]
    })
], PlayerRankingComponent);



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ErrorInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            console.log(error);
            alert(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}


/***/ }),

/***/ "./src/app/services/auth-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");



let AuthInterceptor = class AuthInterceptor {
    // Interceptor works a lot like middleware
    // Next allows us to leave the interceptor and execute the next code
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getAuthStatus();
        if (!isAuth) {
            this.router.navigate(['/admin/login']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.uri = 'http://localhost:4000/api/admin';
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthStatus() {
        return this.isAuthenticated;
    }
    login(email, password) {
        return this.http.post(`/api/admin/login`, { email, password })
            .subscribe(res => {
            const token = res.token;
            this.token = token;
            if (token) {
                const expiresInDuration = res.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(token, expirationDate);
                console.log(expirationDate);
                this.router.navigate(['/admin/main']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    register(name, email, password) {
        return this.http.post(`/api/admin/login`, { name, email, password }).subscribe(() => {
            this.router.navigate(['/admin/main']);
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        // Check if token is already expired
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.router.navigate(['/']);
        this.clearAuthData();
        clearTimeout(this.tokenTimer);
    }
    setAuthTimer(duration) {
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000); //setTimeOut works with millisecond
    }
    saveAuthData(token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GameService = class GameService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:4000';
    }
    getGames() {
        return this.http.get(`/api/game/all`);
    }
    getGameById(id) {
        return this.http.get(`/api/game/${id}`);
    }
    addGame(title, platform, genre, rating, publisher, release, status) {
        const game_to_add = {
            title: title,
            platform: platform,
            genre: genre,
            rating: rating,
            publisher: publisher,
            release: release,
            status: status
        };
        return this.http.post(`/api/game/add`, game_to_add)
            .subscribe(() => {
            this.router.navigate(['/admin/main']);
        });
    }
    updateGame(title, platform, genre, rating, publisher, release, status, id) {
        const game_to_update = {
            title: title,
            platform: platform,
            genre: genre,
            rating: rating,
            publisher: publisher,
            release: release,
            status: status
        };
        return this.http.post(`/api/game/update/${id}`, game_to_update);
    }
    deleteGame(id) {
        return this.http.get(`/api/game/delete/${id}`);
    }
};
GameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PlayerService = class PlayerService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    getPlayers() {
        return this.http.get(`/api/player/all`);
    }
    getPlayerById(id) {
        return this.http.get(`/api/player/${id}`);
    }
    addPlayer(name, ranking, score, time, games, status) {
        const player_to_add = {
            name: name,
            ranking: ranking,
            score: score,
            time: time,
            games: games,
            status: status
        };
        return this.http.post(`/api/player/add`, player_to_add);
    }
    updatePlayer(name, ranking, score, time, status, favGame, id, gamePlayed) {
        const player_to_update = {
            name: name,
            ranking: ranking,
            score: score,
            time: time,
            status: status,
            favGame: favGame,
            gamePlayed: gamePlayed
        };
        return this.http.post(`/api/player/update/${id}`, player_to_update);
    }
    deletePlayer(id) {
        return this.http.get(`/api/player/delete/${id}`);
    }
    joinGame(status, gamePlayed, id) {
        const player_to_update = {
            gamePlayed: gamePlayed,
            status: status
        };
        return this.http.post(`/api/player/join_game/${id}`, player_to_update);
    }
};
PlayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlayerService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tyler/Documents/Full_Stack_Project/front-end-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map