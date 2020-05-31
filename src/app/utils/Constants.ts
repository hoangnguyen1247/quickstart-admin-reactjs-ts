export const LOCAL_STORAGE = {
    ACCESS_TOKEN: "accessToken",
    ACCESS_TOKEN_EXPIRES_IN: "accessTokenExpiresIn",
    LOGGED_USER: "loggedUser",
    ROLE_IDS: "roleIds",
    REFRESH_TOKEN: "refreshToken",
    REFRESH_TOKEN_DATA: "refreshTokendata",
};

export const PAGE_STATES = {
    PRISTINE: "PRISTINE",
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    DONE: "DONE",
};

export const DEFAUT_PAGINATIONS = {
    PAGE_SIZE: 12,
};

export const PAGE_STATE_PROCESSING = ["PENDING", "COMPLETED"];

export const FORM_STATES = {
    PRISTINE: "PRISTINE",
    DIRTIED: "DIRTIED",
    ALL_FIELDS_TOUCHED: "ALL_FIELDS_TOUCHED",
};

export const DRAWER_STATES = {
    HIDDEN: "HIDDEN",
    MINIMUM: "MINIMUM",
    EXPANDED: "EXPANDED",
};

export const LEFT_NAV__MODES = {
    side: "side",
    over: "over",
    push: "push",
};

export const SUPPORTED_LANGUAGES = [
    {value: "vi", text: "Tiếng Việt"},
    {value: "en", text: "English"},
];

export const DATETIME_FORMAT = {
    NORMAL: "MMMM-Do-YYYY, kk:mm:ss",
    FULL: "dddd MMMM-Do-YYYY, kk:mm:ss.SSS Z",
    DISPLAY: "DD-MM-YYYY h:mm A",
};

export const USER_TYPES = {
    CUSTOMER: "customer",
    STAFF: "staff",
};

export const MEMBER_TYPES = {
    ALL: "all",
    SHIPPER: "shipper",
    QUALITY_CONTROLLER: "qualityController",
    MARKETER: "marketer",
    TESTER: "tester",
    MANAGER: "manager",
    CUSTOMER_SERVICE: "customerService",
};

export const SEX_TYPES = [
    "Nam",
    "Nữ",
];

export const OCCUPATION_TYPES = [
    "Công nghệ",
];

export const OCCUPATION_TYPES2 = {
    ALL_CATEGORIES: "all-categories",
    ACCOUNTING: "accounting",
    ADMINISTRATIVE__CLERICAL: "administrative_clerical",
    ADVERTISING__PROMOTION__PR: "advertising_promotion_pr",
    AGRICULTURE__FORESTRY: "agriculture_forestry",
    AIRLINES__TOURISM: "airlines_tourism",
    ARCHITECTURE__INTERIOR_DESIGN: "architecture_interior-design",
    ARTS__DESIGN: "arts_design",
    AUDITING: "auditing",
    AUTO__AUTOMOTIVE: "auto_automotive",
    BANKING: "banking",
    CHEMICAL__BIOCHEMICAL: "chemical_biochemical",
    CIVIL__CONSTRUCTION: "civil_construction",
    CONSULTING: "consulting",
    CUSTOMER_SERVICE: "customer-service",
    DOCTORS: "doctors",
    DOCTORS__NURSES: "doctors_nurses",
    EDUCATION__TRAINING: "education_training",
    ELECTRICAL__ELECTRONICS: "electrical_electronics",
    ENTRY_LEVEL: "entry-level",
    ENVIRONMENT__WASTE_SERVICES: "environment_waste-services",
    EXECUTIVE_MANAGEMENT: "executive-management",
    EXPATRIATE_JOBS_IN_VIETNAM: "expatiate-jobs-in-vietnam",
    EXPORT_IMPORT: "export-import",
    FASHION__LIFESTYLE: "fashion_lifestyle",
    FINANCE__INVESTMENT: "finance_investment",
    FMCG: "fmcg",
    FOOD_AND_BEVERAGE: "food-and-beverage",
    FREIGHT__LOGISTICS: "freight_logistics",
    GEOLOGY__MINERAL: "geology_mineral",
    HEALTH__MEDICAL_CARE: "health_medical-care",
    HIGH_TECHNOLOGY: "high-technology",
    HOUSEHOLD: "household",
    HSE: "hse",
    HUMAN_RESOURCES: "human-resources",
    HVAC: "hvac",
    INDUSTRIAL_PRODUCTS: "industrial-products",
    INSURANCE: "insurance",
    INTERNET__ONLINE_MEDIA: "internet_online-media",
    INTERPRETER__TRANSLATOR: "interpreter_translator",
    IT_HARDWARE__NETWORKING: "it-hardware_networking",
    IT_SOFTWARE: "it-software",
    LEGAL__CONTRACTS: "legal_contracts",
    LUXURY_GOODS: "luxury-goods",
    MAINTENANCE: "maintenance",
    MARINE: "marine",
    MARKETING: "marketing",
    MECHANICAL: "mechanical",
    MERCHANDISING__PURCHASING__SUPPLY_CHAIN: "merchandising_purchasing_supply-chain",
    NGO__NON_PROFIT: "ngo_non-profit",
    OIL__GAS: "oil_gas",
    OVERSEAS_JOBS: "overseas-jobs",
    PHARMACEUTICAL_REPRESENTATIVES: "pharmaceutical-representatives",
    PHARMACEUTICAL__BIOTECH: "pharmaceutical_biotech",
    PHARMACIST: "pharmacist",
    PLANING__PROJECTS: "planing_projects",
    PRINTING: "printing",
    PRODUCTION__PROCESS: "production_process",
    QA__QC: "qa_qc",
    REAL_ESTATE: "real_estate",
    RESTAURANT__HOTEL: "restaurant_hotel",
    RETAIL__WHOLESALE: "retail_wholesale",
    SALES: "sales",
    SALES_TECHNICAL: "sales-technical",
    SECURITIES_AND_TRADING: "securities-and-trading",
    TELECOMMUNICATIONS: "telecommunications",
    TEMPORARY__CONTRAST: "temporary_contrast",
    TEXTILES__GARMENTS__FOOTWEAR: "textiles_garments_footwear",
    TV__MEDIA__NEWSPAPER: "tv_media_newspaper",
    WAREHOUSE: "warehouse",
    OTHERS: "others",
};

export const CONTRACT_TYPES = {
    FULLTIME: "FullTime",
    PARTTIME: "PartTime",
};

export const DEFAULT_ROLE_TYPE = {
    SHIPPER: "shipper",
    CUSTOMER_SERVICE: "customerService",
    QUALITY_CONTROLLER: "qualityController",
    MANAGER: "manager",
};

export const CAN_SHIP_ROLE_TYPE = [
    DEFAULT_ROLE_TYPE.SHIPPER,
    DEFAULT_ROLE_TYPE.CUSTOMER_SERVICE,
    DEFAULT_ROLE_TYPE.QUALITY_CONTROLLER,
];

export const SERVICE_TYPE = {
    LAUNDRY: 1,
    DRY_CLEANING: 2,
    SHOE_CLEANING: 3,
};

export const DISCOUNT_TYPES = {
    "percentage": "Giảm theo phần trăm đơn hàng",
    "absolute": "Giảm theo giá trị",
};

export const DISCOUNT_CONDITION_TYPES = {
    "none": "Không áp dụng",
    "firstOrderAndOverValue": "Đơn hàng đầu tiên và giá trị trên",
    "overValue": "Giá trị tối thiểu",
    "numberOfItems": "Đôi thứ N trở lên",
    "repeatedOrders": "Khách đặt lần thứ",
    "multipleServicesAndOverValue": "Từ 2 dịch vụ trở lên và giá trị trên",
    "others": "Điều kiện khác",
};

export const DISCOUNT_TYPES2 = {
    PERCENTAGE: "percentage",
    ABSOLUTE: "absolute",
};

export const DISCOUNT_CONDITION_TYPES2 = {
    NONE: "none",
    FIRST_ORDER_AND_OVER_VALUE: "firstOrder",
    FIRST_ORDER_AND_OVER_VALUE2: "firstOrderAndOverValue",
    ORDER_VALUE: "overValue",
    OVER_VALUE: "overValue",
    NUMBER_OF_ITEMS: "numberOfItems",
    REPEATED_ORDERS: "repeatedOrders",
    MULTIPLE_SERVICES_AND_OVER_VALUE: "multipleServicesAndOverValue",
    OTHERS: "others",
};

export const TYPE_OF_DISCOUNT = {
    APPLY_FOR_SHIPPING_FEE: "typeOfDiscount_applyForShippingFee",
    APPLY_FOR_SERVICE_FEE: "typeOfDiscount_applyForServiceFee",
}

export const ORDER_STATUS_TYPES = {
    DRAFT: "draft",
    NEW: "new",
    CANCELLED: "cancelled",
    FOLLOW_UP: "follow-up",
    CONFIRMED: "confirmed",
    TO_PICKUP: "to-pickup",
    PICKUP_FAILED: "pickup-failed",
    PICKUP_SUCCESSED: "pickup-successed",
    INSTOCK_TO_RECORD: "instock-to-record",
    RECORDED: "recorded",
    TO_RETURN: "to-return",
    OUTSTOCK_TO_PROCESS: "outstock-to-process",
    VENDOR_DENIED: "vendor-denied",
    PROCESSING: "processing",
    PROCESSING_COMPLETED: "processing-completed",
    IN_VENDOR_TO_DELIVER: "in-vendor-to-deliver",
    INSTOCK_TO_QUALITY_CHECK: "instock-to-quality-check",
    QUALITY_CHECKED: "quality-checked",
    TO_DELIVER: "to-deliver",
    OUTSTOCK_TO_DELIVER: "outstock-to-deliver",
    DELIVERY_FAILED: "delivery-failed",
    DELIVERED: "delivered",
    TO_REPROCESS: "to-reprocess",
    COMPLETED: "completed",
};

export const ORDER_CAN_CANCEL_STATUS = [
    ORDER_STATUS_TYPES.DRAFT,
    ORDER_STATUS_TYPES.NEW,
    ORDER_STATUS_TYPES.CONFIRMED,
    ORDER_STATUS_TYPES.TO_PICKUP,
    ORDER_STATUS_TYPES.PICKUP_FAILED,
    // ORDER_STATUS_TYPES.PICKUP_SUCCESSED,
];

export const ORDER_BEFORE_PICKUP_SUCCESSED_STATUS = [
    ORDER_STATUS_TYPES.DRAFT,
    ORDER_STATUS_TYPES.NEW,
    ORDER_STATUS_TYPES.CONFIRMED,
    ORDER_STATUS_TYPES.TO_PICKUP,
    ORDER_STATUS_TYPES.PICKUP_FAILED,
    ORDER_STATUS_TYPES.CANCELLED,
    ORDER_STATUS_TYPES.FOLLOW_UP,
];

export const ORDER_AFTER_PICKUP_SUCCESSED_STATUS = [
    ORDER_STATUS_TYPES.PICKUP_SUCCESSED,
    ORDER_STATUS_TYPES.INSTOCK_TO_RECORD,
    ORDER_STATUS_TYPES.RECORDED,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_PROCESS,
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.PROCESSING_COMPLETED,
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.INSTOCK_TO_QUALITY_CHECK,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.TO_DELIVER,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_DELIVER,
    ORDER_STATUS_TYPES.DELIVERY_FAILED,
    ORDER_STATUS_TYPES.DELIVERED,
    ORDER_STATUS_TYPES.COMPLETED,
];

export const ORDER_SAME_DELIVERY_ORDER_STATUS = [
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.TO_DELIVER,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_DELIVER,
    ORDER_STATUS_TYPES.DELIVERED,
];

export const BEFORE_STOCKOUT_DELIVERY_ORDER_STATUS = [
    ORDER_STATUS_TYPES.TO_DELIVER,
];

export const AFTER_STOCKOUT_DELIVERY_ORDER_STATUS = [
    ORDER_STATUS_TYPES.TO_DELIVER,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_DELIVER,
    ORDER_STATUS_TYPES.DELIVERY_FAILED,
    ORDER_STATUS_TYPES.DELIVERED,
];

export const ORDER_IN_ORDER_STATUS = [
    ORDER_STATUS_TYPES.NEW,
    ORDER_STATUS_TYPES.FOLLOW_UP,
    ORDER_STATUS_TYPES.CONFIRMED,
    ORDER_STATUS_TYPES.TO_PICKUP,
    ORDER_STATUS_TYPES.PICKUP_FAILED,
    ORDER_STATUS_TYPES.PICKUP_SUCCESSED,
    ORDER_STATUS_TYPES.INSTOCK_TO_RECORD,
    ORDER_STATUS_TYPES.COMPLETED,
    ORDER_STATUS_TYPES.CANCELLED,
];

export const ORDER_IN_ORDER_ITEM_STATUS = [
    ORDER_STATUS_TYPES.RECORDED,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_PROCESS,
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.PROCESSING_COMPLETED,
    ORDER_STATUS_TYPES.INSTOCK_TO_QUALITY_CHECK,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.DELIVERY_FAILED,
];

export const ORDER_IN_DELIVERY_ORDER_STATUS = [
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.TO_DELIVER,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_DELIVER,
    ORDER_STATUS_TYPES.DELIVERY_FAILED,
    ORDER_STATUS_TYPES.DELIVERED,
];

export const ALL_ORDER_STATUS = [
    ORDER_STATUS_TYPES.NEW,
    ORDER_STATUS_TYPES.FOLLOW_UP,
    ORDER_STATUS_TYPES.CONFIRMED,
    ORDER_STATUS_TYPES.TO_PICKUP,
    ORDER_STATUS_TYPES.PICKUP_FAILED,
    ORDER_STATUS_TYPES.PICKUP_SUCCESSED,
    ORDER_STATUS_TYPES.INSTOCK_TO_RECORD,
    ORDER_STATUS_TYPES.RECORDED,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_PROCESS,
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.PROCESSING_COMPLETED,
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.INSTOCK_TO_QUALITY_CHECK,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.TO_DELIVER,
    ORDER_STATUS_TYPES.OUTSTOCK_TO_DELIVER,
    ORDER_STATUS_TYPES.DELIVERY_FAILED,
    ORDER_STATUS_TYPES.DELIVERED,
    ORDER_STATUS_TYPES.COMPLETED,
    ORDER_STATUS_TYPES.CANCELLED,
];

export const ORDER_TO_SHIPMENT_SCHEDULE_STATUS = [
    ORDER_STATUS_TYPES.CONFIRMED,
    ORDER_STATUS_TYPES.TO_PICKUP,
    ORDER_STATUS_TYPES.PICKUP_FAILED,
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.TO_DELIVER,
];

export const IN_STOCK_ORDER_STATUS = [
    ORDER_STATUS_TYPES.INSTOCK_TO_RECORD,
    ORDER_STATUS_TYPES.RECORDED,
    ORDER_STATUS_TYPES.INSTOCK_TO_QUALITY_CHECK,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.TO_DELIVER,
];

export const IN_VENDOR_ORDER_STATUS = [
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.IN_VENDOR_TO_DELIVER,
];

export const DELIVERED_ORDER_STATUS = [
    ORDER_STATUS_TYPES.DELIVERED,
];

export const ORDER_STATUS_CAN_CREATE_DELIVER = [
    ORDER_STATUS_TYPES.PROCESSING,
    ORDER_STATUS_TYPES.QUALITY_CHECKED,
    ORDER_STATUS_TYPES.TO_RETURN,
];

export const ORDER_ITEM_STATUS_TYPES = {
    TO_PROCESS: "to-process",
    PROCESSING: "processing",
    PROCESSING_COMPLETED: "processing-completed",
    TO_REPROCESS: "to-reprocess",
};

export const DELIVERY_ORDER_STATUS_TYPES = {
    TO_DELIVER: "to-deliver",
    OUTSTOCK_TO_DELIVER: "outstock-to-deliver",
    DELIVERY_FAILED: "delivery-failed",
    DELIVERY_SUCCESSED: "delivery-successed",
};

export const NOTE_CONTEXTS = {
    ORDER_CANCEL: "orderCancel",
    ORDER_FOLLOWUP: "order-followup",
    ORDER_PICKUP_FAILED: "order-pickup-failed",
    ORDER_ITEM_REMOVE: "order-item-remove",
    ORDER_ITEM_RETURN: "order-item-return",
    CANCEL_DELIVER: "cancel-deliver",
    VENDOR_DENIED: "vendor-denied",
    VENDOR_OUT_RE_PROCESS: "vendor-out-re-process",
    VENDOR_OUT_OTHER_REQUEST: "vendor-out-other-request",
    QUALITY_CHECK_ISSUE: "quality-check-issue",
    DELIVERY_REMOVE_ITEM: "delivery-remove-item",
};

export const ORDER_REASON_TYPES = {
    ORDER_CANCEL_PRICES: "orderCancel_prices",
    ORDER_CANCEL_SHIPPING_FEE: "orderCancel_shippingFee",
    ORDER_CANCEL_CUSTOMER_NOT_TRUST: "orderCancel_customerNotTrust",
    ORDER_CANCEL_SHIPMENT_TOO_MANY_TIMES: "orderCancel_shipmentTooManyTimes",
    ORDER_CANCEL_CUSTOMER_CHANGED_PLAN: "orderCancel_customerChangedPlan",
    ORDER_CANCEL_CUSTOMER_CANNOT_CONTACT: "orderCancel_customerCannotContact",
    ORDER_CANCEL_NOT_SUPPORTED_AREA: "orderCancel_notSupportedArea",
    ORDER_CANCEL_TOO_RUSH: "orderCancel_tooRush",
    ORDER_CANCEL_CUSTOMER_NOT_BOOKED: "orderCancel_customerNotBooked",
    ORDER_CANCEL_OTHERS: "orderCancel_others",

    ORDER_FOLLOWUP_RECONSIDER: "order-followup_reconsider",
    ORDER_FOLLOWUP_CONSULT: "order-followup_consult",
    ORDER_FOLLOWUP_SEND_QUOTATION: "order-followup_send_quotation",
    ORDER_FOLLOWUP_CHECK_SHIPMENT: "order-followup_check_shipment",
    ORDER_FOLLOWUP_OTHERS: "order-followup_others",

    ORDER_PICKUP_FAILED_CUSTOMER_DELAY: "order-pickup-failed_customer-delay",
    ORDER_PICKUP_FAILED_CANNOT_CONTACT: "order-pickup-failed_cannot-contact",
    ORDER_PICKUP_FAILED_NO_SHOW: "order-pickup-failed_no-show",
    ORDER_PICKUP_FAILED_SHIPPER_CANCEL: "order-pickup-failed_shipper-cancel",
    ORDER_PICKUP_FAILED_OTHERS: "order-pickup-failed_others",

    ORDER_ITEM_REMOVE__OTHERS: "order-item-remove_others",

    ORDER_ITEM_RETURN__OTHERS: "order-item-return_others",

    CANCEL_DELIVER__NOT_FOUND: "cancel-deliver_not-found",
    CANCEL_DELIVER__NO_PROCESS_RETURN_TO_CUSTOMER: "cancel-deliver_no-process-return-to-customer",
    CANCEL_DELIVER__OTHERS: "cancel-deliver_others",

    VENDOR_DENIED__NOT_FOUND: "vendor-denied_not-found",
    VENDOR_DENIED__CANNOT_PROCESS: "vendor-denied_cannot-process",
    VENDOR_DENIED__OTHERS: "vendor-denied_others",

    VENDOR_OUT_RE_PROCESS__OTHERS: "vendor-out-re-process_others",

    VENDOR_OUT_OTHER_REQUEST__BROKEN: "vendor-out-other-request_broken",
    VENDOR_OUT_OTHER_REQUEST__CANNOT_PROCESS: "vendor-out-other-request_cannot-process",
    VENDOR_OUT_OTHER_REQUEST__OTHERS: "vendor-out-other-request_others",

    QUALITY_CHECK_ISSUE__OTHERS: "quality-check-issue_others",

    DELIVERY_ORDER_REMOVE_ITEM__ITEM_NOT_FOUND: "delivery-order-remove-item_item-not-found",
    DELIVERY_ORDER_REMOVE_ITEM__QUALITY_CHECK_FAILED: "delivery-order-remove-item_quality-check-failed",
    DELIVERY_ORDER_REMOVE_ITEM__OTHERS: "delivery-order-remove-item_others",

    DELIVERY_ORDER_DELIVERY_FAILED__CUSTOMER_DELAY: "delivery-order-delivery-failed_customer-delay",
    DELIVERY_ORDER_DELIVERY_FAILED__CANNOT_CONTACT: "delivery-order-delivery-failed_cannot-contact",
    DELIVERY_ORDER_DELIVERY_FAILED__NO_SHOW: "delivery-order-delivery-failed_no-show",
    DELIVERY_ORDER_DELIVERY_FAILED__SHIPPER_CANCEL: "delivery-order-delivery-failed_shipper-cancel",
    DELIVERY_ORDER_DELIVERY_FAILED__OTHERS: "delivery-order-delivery-failed_others",

    DELIVERY_ORDER_SUCCESSED_REMOVE_ITEM__RE_PROCESS: "delivery-order-successed-remove-item_re-process",
    DELIVERY_ORDER_SUCCESSED_REMOVE_ITEM__MISTAKE: "delivery-order-successed-remove-item_mistake",
    DELIVERY_ORDER_SUCCESSED_REMOVE_ITEM__OTHERS: "delivery-order-successed-remove-item_others",

    DELIVERY_ORDER_SUCCESSED_PAYMENT__PAID: "delivery-order-successed-payment_paid",
    DELIVERY_ORDER_SUCCESSED_PAYMENT__TRANSFERED: "delivery-order-successed-payment_transfered",
    DELIVERY_ORDER_SUCCESSED_PAYMENT__PAY_WHEN_COMPLETED: "delivery-order-successed-payment_pay-when-completed",
    DELIVERY_ORDER_SUCCESSED_PAYMENT__PARTIALLY_PAID: "delivery-order-successed-payment_partially-paid",
};

export const RATING_TYPES = [
    "1 sao",
    "2 sao",
    "3 sao",
    "4 sao",
    "5 sao"
];

export const ORDER_LABELS = {
    GREEN: "label-green",
    YELLOW: "label-yellow",
    ORANGE: "label-orange",
    RED: "label-red",
    PURPLE: "label-purple",
    BLUE: "label-blue",
    SKY: "label-sky",
    LIME: "label-lime",
    PINK: "label-pink",
    BLACK: "label-black",
};

export const CUSTOMER_LEVELS = {
    MEMBER: "member",
    SILVER: "silver",
    GOLD: "gold",
    PLATINUM: "platinum",
};

export const VENDOR_LEVELS = {
    MEMBER: "member",
    SILVER: "silver",
    GOLD: "gold",
    PLATINUM: "platinum",
};

export const STOCK_METHODS = {
    BY_ORDER: "by-order",
    BY_ORDER_ITEM: "by-order-item",
    BY_DELIVERY_ORDER: "by-delivery-order",
};

export const STOCK_IN_TYPES = {
    INSTOCK_TO_RECORD: "instock-to-record", // after pickup successed
    INSTOCK_TO_QUALITY_CHECK: "instock-to-quality-check", // after collect from vendor
    INSTOCK_TO_DELIVER: "instock-to-deliver", // after delivery failed
    INSTOCK_FROM_CUSTOMER: "instock-from-customer", // after delivery failed
};

export const STOCK_IN_APPROVAL_STATUS = {
    APPROVED_EXACT: "approved-exact",
    NOT_APPROVED: "not-approved",
    APPROVED_NOT_EXACT: "approved-not-exact",
};

export const STOCK_OUT_TYPES = {
    OUTSTOCK_TO_PROCESS: "outstock-to-process",
    OUTSTOCK_TO_DELIVER: "outstock-to-deliver",
};

export const STOCK_OUT_APPROVAL_STATUS = {
    APPROVED_EXACT: "approved-exact",
    NOT_APPROVED: "not-approved",
    APPROVED_NOT_EXACT: "approved-not-exact",
};

export const VENDOR_IN_TYPES = {
    IN_VENDOR_TO_PROCESS: "in-vendor-to-process",
};

export const VENDOR_IN_APPROVAL_STATUS = {
    APPROVED_EXACT: "approved-exact",
    NOT_APPROVED: "not-approved",
    APPROVED_NOT_EXACT: "approved-not-exact",
    VENDOR_ACCEPTED: "vendor-accepted",
    VENDOR_DENIED: "vendor-denied",
    CHANGED_VENDOR: "vendor-changed",
    OTHER_REQUEST: "otherRequest",
};

export const VENDOR_OUT_TYPES = {
    PROCESSING_COMPLETED: "processing-completed",
};

export const VENDOR_OUT_APPROVAL_STATUS = {
    APPROVED_EXACT: "approved-exact",
    NOT_APPROVED: "not-approved",
    APPROVED_NOT_EXACT: "approved-not-exact",
};

export const QUALITY_CHECK_TYPES = {
    QUALITY_CHECK_TO_DELIVER: "quality-check-to-deliver",
};

export const DELIVERY_ORDER_TYPES = {
    CREATE_DELIVERY_ORDER_TO_DELIVER: "create-delivery-order-to-deliver",
    DELIVERY_ORDER_FROM_VENDOR: "delivery-order-from-vendor",
};

export const DELIVERY_ORDER_STATUS = {
    IN_VENDOR_TO_DELIVER: "in-vendor-to-deliver",
    TO_DELIVER: "to-deliver",
    OUTSTOCK_TO_DELIVER: "outstock-to-deliver",
};

export const DEFAULT_UNLOADER_SRC = "/assets/images/no-image.png";
export const ORDER_UNLOADER_SRC = "/assets/images/no-image.png";

export const ACTION_TYPES = {
    MY_ACTION: "my-action",
    SEND_QUOTATION: "send-quotation",
    CONSULT_CUSTOMER: "consult-customer",
    CONFIRM_CUSTOMER: "confirm-customer",
    HANDLE_ISSUE: "handle-issue",
    UPDATE_PROGRESS: "update-progress",
    UPDATE_DELIVERY_TIME: "update-delivery-time",
};

export const ACTION_TYPES2 = {
    SEND_QUOTATION: "action_sendQuotation",
    CONSULT_CUSTOMER: "action_consultCustomer",
    CONFIRM_CUSTOMER: "action_confirmCustomer",
    HANDLE_ISSUE: "action_handleIssue",
    UPDATE_PROGRESS: "action_updateProgress",
    UPDATE_DELIVERY_TIME: "action_updateDeliveryTime",
};

export const ORDER_ALERT_TYPES = {
    BIG_VALUE: "bigPrice",
    HAS_LABEL: "hasLabel",
    NEAR_PICKUP_DUEDATE: "nearPickupDuedate",
    NEAR_DELIVERY_DUEDATE: "nearDeliveryDuedate",
    NEAR_PICKUP_DUEDATE_NO_SHIPPER: "nearPickupDuedateNoShipper",
    NEAR_DELIVERY_DUEDATE_NO_SHIPPER: "nearDeliveryDuedateNoShipper",
    PICKUP_FAILED_MANY_TIME: "pickupFailedManyTime",
    DELIVERY_FAILED_MANY_TIME: "deliveryFailedManyTime",
};

export const SETTING_TYPES = {
    ORDER_ALERT: "orderAlert",
    LAUNDRY_TO_VENDOR: "laundryToVendor",
    LABEL: "label",
    NUMBER_OF_PHOTOS: "numberOfPhotos",
    DEFAULT_ACCOUNT: "defaultAccount",
    WORKING_DAY: "workingDay",
    PAYROLL: "payroll",
    CUSTOMER_NOTIFICATION: "customerNotification",
    CUSTOMER_NOTIFICATION_MODE: "customerNotificationMode",
    ISSUE_NOTIFICATION: "issueNotification",
    ORDER_FOLLOWUP_MODE: "orderFollowupMode",
    ORDER_FOLLOWUP: "orderFollowup",
    LEAD_FOLLOWUP_MODE: "leadFollowupMode",
    LEAD_FOLLOWUP: "leadFollowup",
    ORDER_CALLS_IGNORED_NUMBERS: "orderCallsIgnoredNumbers",
};

export const SETTING_NAMES = {
    ORDER_ALERT__BIG_VALUE: "orderAlert_bigPrice",
    ORDER_ALERT__LABEL: "orderAlert_label",
    ORDER_ALERT__NEAR_PICKUP_DUEDATE: "orderAlert_nearPickupDuedate",
    ORDER_ALERT__NEAR_DELIVERY_DUEDATE: "orderAlert_nearDeliveryDuedate",
    ORDER_ALERT__NEAR_PICKUP_DUEDATE_NO_SHIPPER: "orderAlert_nearPickupDuedateNoShipper",
    ORDER_ALERT__NEAR_DELIVERY_DUEDATE_NO_SHIPPER: "orderAlert_nearDeliveryDuedateNoShipper",
    ORDER_ALERT__PICKUP_FAILED_MANY_TIME: "orderAlert_pickupFailedManyTime",
    ORDER_ALERT__DELIVERY_FAILED_MANY_TIME: "orderAlert_deliveryFailedManyTime",

    LAUNDRY_TO_VENDOR__SERVICE_ITEM: "laundryToVendor_serviceItem",
    LAUNDRY_TO_VENDOR__SERVICE_ITEMS: "laundryToVendor_serviceItems",
    
    LABEL__URGENT: "label_urgent",

    DEFAULT_ACCOUNT__DEFAULT_CUSTOMER_SERVICE: "defaultAccount_defaultCustomerService",
    DEFAULT_ACCOUNT__DEFAULT_SHIPPER: "defaultAccount_defaultShipper",
    DEFAULT_ACCOUNT__DEFAULT_SQM: "defaultAccount_defaultSQM",

    WORKING_DAY__TIME: "workingDay_time",
    WORKING_DAY__DAY: "workingDay_day",
    WORKING_DAY__NIGHT: "workingDay_night",

    PAYROLL__BY_WORKING_DAY: "payroll_byWorkingDay",
    PAYROLL__BY_SHIPPING_AREA: "payroll_byShippingArea",
    PAYROLL__BY_ORDER_VALUE: "payroll_byOrderValue",

    CUSTOMER_NOTIFICATION_MODE__PROD: "customerNotificationMode_prod",

    CUSTOMER_NOTIFICATION__CREATE_ORDER: "customerNotification_createOrder",
    CUSTOMER_NOTIFICATION__RECORD_COMPLETED: "customerNotification_recordCompleted",

    ISSUE_NOTIFICATION: "issueNotification",

    ORDER_FOLLOWUP_MODE__PROD: "orderFollowupMode_prod",
    ORDER_FOLLOWUP__COUNT_0: "orderFollowup_count0", 
    
    LEAD_FOLLOWUP_MODE__PROD: "leadFollowupMode_prod",

    ORDER_CALLS_IGNORED_NUMBERS: "orderCallsIgnoredNumbers",
};

export const ORDER_ALERT_TO_SETTINGS = {
    [ORDER_ALERT_TYPES.BIG_VALUE]: SETTING_NAMES.ORDER_ALERT__BIG_VALUE,
    [ORDER_ALERT_TYPES.HAS_LABEL]: SETTING_NAMES.ORDER_ALERT__LABEL,
    [ORDER_ALERT_TYPES.NEAR_PICKUP_DUEDATE]: SETTING_NAMES.ORDER_ALERT__NEAR_PICKUP_DUEDATE,
    [ORDER_ALERT_TYPES.NEAR_DELIVERY_DUEDATE]: SETTING_NAMES.ORDER_ALERT__NEAR_DELIVERY_DUEDATE,
    [ORDER_ALERT_TYPES.NEAR_PICKUP_DUEDATE_NO_SHIPPER]: SETTING_NAMES.ORDER_ALERT__NEAR_PICKUP_DUEDATE_NO_SHIPPER,
    [ORDER_ALERT_TYPES.NEAR_DELIVERY_DUEDATE_NO_SHIPPER]: SETTING_NAMES.ORDER_ALERT__NEAR_DELIVERY_DUEDATE_NO_SHIPPER,
    [ORDER_ALERT_TYPES.PICKUP_FAILED_MANY_TIME]: SETTING_NAMES.ORDER_ALERT__PICKUP_FAILED_MANY_TIME,
    [ORDER_ALERT_TYPES.DELIVERY_FAILED_MANY_TIME]: SETTING_NAMES.ORDER_ALERT__DELIVERY_FAILED_MANY_TIME,
};

export const ISSUE_STATUSES = {
    TO_RESOLVE: "to-resolve",
    INVESTIGATING: "investigating",
    PROPOSAL: "proposal",
    NEGOTIATE: "negotiate",
    RE_PROCESSING: "re-processing",
    TO_COMPENSATE: "to-compensate",
    RESOLVED: "resolved",
    IGNORED: "ignored",
};

export const ISSUE_STATUS_COLORS = {
    [ISSUE_STATUSES.TO_RESOLVE]: "#ff0000",
    [ISSUE_STATUSES.INVESTIGATING]: "#ff9900",
    [ISSUE_STATUSES.PROPOSAL]: "#f1c232",
    [ISSUE_STATUSES.NEGOTIATE]: "#ffff00",
    [ISSUE_STATUSES.RE_PROCESSING]: "#6aa84f",
    [ISSUE_STATUSES.TO_COMPENSATE]: "#4a86e8",
    [ISSUE_STATUSES.RESOLVED]: "#00ff00",
    [ISSUE_STATUSES.IGNORED]: "#00ff00",
};

export const ALL_ISSUE_STATUSES = [
    ISSUE_STATUSES.TO_RESOLVE,
    ISSUE_STATUSES.INVESTIGATING,
    ISSUE_STATUSES.PROPOSAL,
    ISSUE_STATUSES.NEGOTIATE,
    ISSUE_STATUSES.RE_PROCESSING,
    ISSUE_STATUSES.TO_COMPENSATE,
    ISSUE_STATUSES.RESOLVED,
    ISSUE_STATUSES.IGNORED,
];

export const ISSUE_RECEIPT_CHANNELS = {
    CHAT: "chat",
    CALL: "call",
    EMAIL: "email",
    OFFLINE: "offline",
    OTHERS: "others",
};

export const ISSUE_AREAS = {
    SHIPMENT: "issue_shipment",
    QUALITY_OF_SERVICE: "issue_qualityOfService",
    LOST_OR_DAMAGE: "issue_lostOrDamage",
    STAFF_ATTITUDE: "issue_staffAttitude",
    MISCOMMUNICATION: "issue_miscommunication",
    OTHERS: "issue_others",
};

export const ALL_ISSUE_AREAS = [
    ISSUE_AREAS.SHIPMENT,
    ISSUE_AREAS.QUALITY_OF_SERVICE,
    ISSUE_AREAS.LOST_OR_DAMAGE,
    ISSUE_AREAS.STAFF_ATTITUDE,
    ISSUE_AREAS.MISCOMMUNICATION,
    ISSUE_AREAS.OTHERS,
];

export const ISSUE_SERVERITY = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    CRITICAL: "critical",
};

export const ALL_ISSUE_SERVERITIES = [
    ISSUE_SERVERITY.CRITICAL,
    ISSUE_SERVERITY.HIGH,
    ISSUE_SERVERITY.MEDIUM,
    ISSUE_SERVERITY.LOW,
];

export const PICKUP_TYPE = {
    HERAMO_SHOP: "heramoShop",
    SHIPPER: "shipper",
    THIRDPARTY_VENDOR: "thirdPartyVendor",
};

export const DELIVERY_TYPE = {
    HERAMO_SHOP: "heramoShop",
    SHIPPER: "shipper",
    THIRDPARTY_VENDOR: "thirdPartyVendor",
};

export const ORDER_NOTE_OPTION_TYPE = {
    PICKUP_FAILED: "pickupFailed",
    ORDER_CANCELLED: "orderCancelled",
    ORDER_FOLLOWUP: "orderFollowup",
    ORDER_CUSTOMER_DENIED: "orderCustomerDenied",
    NOTE_STOCK_OUT_TO_PROCESS: "notStockOutToProcess",
    ORDER_ITEM_REMOVED_ON_DELIVER: "orderItemRemovedOnDeliver",
    DELIVERY_FAILED: "deliveryFailed",
    DELIVERY_PAYMENT_METHOD: "deliveryPaymentMethod",
    ISSUE: "issue",
    ISSUE_SERVERITY: "issueSeverity",
    ACTION: "action",
    VENDOR_DENIED: "vendorDenied",
    CHARGE_GROUP: "chargeGroup",
    PRICE_UNIT: "priceUnit",
    CUSTOMER_NOTIFICATION: "customerNotification",
};

export const CHARGE_APPLY_TYPES = {
    APPLY_FOR_SHIPPING_FEE: "typeOfCharge_applyForShippingFee",
    APPLY_FOR_SERVICE_FEE: "typeOfCharge_applyForServiceFee",
    APPLY_INDEPENDENT: "typeOfCharge_applyIndependent",
}

export const ORDER_SOURCES = {
    HOTLINE: "hotline",
    FACEBOOK: "facebook",
    ZALO: "zalo",
    INSTAGRAM: "instagram",
    WHATSAPP: "whatsapp",
    BLOG: "blog",
    OFFLINE: "offline",
    WEBSITE: "website",
    MOBILE_APP: "mobile-app",
}

export const IMAGE_TYPE = {
    USER_AVATARS: "userAvatars",
    ORDERS: "orders",
    TASKS: "tasks",
    ISSUES: "issues",
    SHIPMENT: "issue_shipment",
    OTHERS: "others",
};

export const ImageType = {
    UserAvatars: "userAvatars",
    Orders: "orders",
    Tasks: "tasks",
    Issues: "issues",
    Others: "others",
}
