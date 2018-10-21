/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

export const APP_INIT_OCC_PROPS = "app.init.vendor.props";

export const PAGE_LAYOUT_LOAD_START = "page.layout.load.start";
export const PAGE_LAYOUT_LOAD_COMPLETE = "page.layout.load.complete";

export const USER_LOGIN_REQUESTED = "user.login.request";

//----------------------------------------
// Routing
//----------------------------------------
export const PAGE_VIEW_CHANGED = "page.view.changed";
export const PAGE_CONTEXT_CHANGED = "page.context.changed";
export const PAGE_CHANGED = "page.changed.memory";
export const PAGE_READY = "page.ready.memory";
export const PAGE_METADATA_CHANGED = "page.metadata.changed";
export const PAGE_LAYOUT_LOADED = "page.layout.loaded.memory";
export const PAGE_LAYOUT_SERVER_ERROR = "page.layout.server.error";
export const PAGE_LAYOUT_UPDATED = "page.layout.updated.memory";
export const PAGE_PARAMETERS_CHANGED = "page.parameters.changed";
export const PAGE_PARAMETERS = "page.parameters.memory";
export const PAGE_PAGINATION_CHANGE = "page.pagination.change.memory";
export const PAGE_PAGINATION_CALCULATED = "page.pagination.calculated.memory";
export const RECORD_PAGINATION_PAGE_CHANGE = "record.pagination.page.changed";
export const UPDATE_HASH_CHANGES = "update.hash.changes.memory";
export const HISTORY_PUSH_STATE = "history.push.state.memory";
export const REGION_METADATA_CHANGED = "region.metadata.changed";

//----------------------------------------
// Storefront Authentication and Login
//----------------------------------------
export const USER_CREATION_FAILURE = "user.creation.failure.memory";
export const USER_LOGIN_SUCCESSFUL = "user.login.successful";
export const USER_LOGIN_FAILURE = "user.login.failure";
export const USER_LOGOUT_SUCCESSFUL = "user.logout.successful";
export const USER_LOGOUT_FAILURE = "user.logout.failure";
export const USER_REGISTRATION_SUBMIT = "user.registration.submit";
export const USER_LOGOUT_SUBMIT = "user.logout.submit";
export const USER_LOGIN_SUBMIT = "user.login.submit";
export const USER_LOGIN_CANCEL = "user.login.cancel";
export const USER_LOAD_SHIPPING = "user.load.shipping";
export const USER_PROFILE_LOADED = "user.profile.loaded";
export const USER_PROFILE_UPDATE_SUCCESSFUL =
  "user.profile.update.successful.memory";
export const USER_PROFILE_PASSWORD_UPDATE_SUCCESSFUL =
  "user.profile.pwd.update.successful";
export const USER_PROFILE_PASSWORD_UPDATE_FAILURE =
  "user.profile.pwd.update.failure";
export const USER_PROFILE_UPDATE_FAILURE = "user.profile.update.failure.memory";
export const USER_PROFILE_UPDATE_SUBMIT = "user.profile.update.submit";
export const USER_PROFILE_UPDATE_CANCEL = "user.profile.update.cancel";
export const USER_PROFILE_UPDATE_INVALID = "user.profile.update.invalid";
export const USER_PROFILE_UPDATE_NOCHANGE = "user.profile.update.nochange";
export const USER_PROFILE_ADDRESSES_REMOVED = "user.profile.addresses.removed";
export const USER_AUTO_LOGIN_SUCCESSFUL = "user.auto.login.successful";
export const AUTO_LOGIN_AND_GET_USER_DATA_SUCCESSFUL =
  "auto.login.and.get.user.data.successful";
export const USER_AUTO_LOGIN_FAILURE = "user.auto.login.failure.memory";
export const USER_PROFILE_PASSWORD_UPDATE = "user.profile.password.update";
export const USER_UNAUTHORIZED = "user.unauthorized.memory";
export const USER_SESSION_EXPIRED = "user.session.expired.memory";
export const USER_SESSION_VALID = "user.session.validated.memory";
export const USER_SESSION_RESET = "user.session.reset";
export const USER_PROFILE_SESSION_RESET = "user.profile.session.reset";
export const USER_CLEAR_CART = "user.clear.cart";
export const USER_RESET_PASSWORD_FAILURE = "user.reset.password.failure";
export const USER_RESET_PASSWORD_SUCCESS = "user.reset.password.success";
export const USER_PASSWORD_EXPIRED = "user.password.expired";
export const USER_PASSWORD_GENERATED = "user.password.generated";
export const USER_NETWORK_ERROR = "user.network.error";
export const USER_LOCALE_NOT_SUPPORTED = "user.locale.not.supported";
export const UPDATE_USER_LOCALE_NOT_SUPPORTED_ERROR =
  "update.user.locale.not.supported.error.memory";
export const DISCARD_ADDRESS_CHANGES = "discard.address.changes";
export const USER_LOYALTY_DETAILS_UPDATED = "user.loyalty.details.updated";
export const PURCHASE_LIST_FETCH_SUCCESS = "purchase.list.fetch.success";
export const FETCH_PURCHASE_LIST_AFTER_DELETE =
  "fetch.purchase.list.after.delete";
export const ADD_TO_PURCHASE_LIST = "add.to.purchase.list";
export const PRODUCT_ADDED_TO_PURCHASE_LIST_SUCCESS =
  "product.added.to.purchase.list.success";
