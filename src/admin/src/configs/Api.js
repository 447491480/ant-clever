/**
 * Created by chang on 2017/7/11.
 */

const MY_HOST = '/';

export default class AppConfig {
    static MY_LOGIN = MY_HOST + 'client/user/check-user-login';
    static MY_REGISTER = MY_HOST + 'client/user/save';
    static MY_RESET_PASSWORD = MY_HOST + 'client/user/reset-password';
    static MY_LOGOUT = MY_HOST + 'client/user/logout';
    static MY_FORGET_PASSWORD = MY_HOST +'client/user/forget-password';
    static MY_FILE_UPLOAD = MY_HOST + 'client/file/upload';
    static MY_FILE_UPLOAD_VOICE = MY_HOST + 'client/file/upload-voice';
    static MY_FILE_UPLOAD_RECORD = MY_HOST + 'client/file/upload-record';

    // create
    static CREATE_PREVIEW = MY_HOST + 'client/video/create-preview';
    static SCENE_LIST = MY_HOST + 'client/video/scene-list';
    static CREATE_PROGRESS = MY_HOST + 'client/video/create-progress';
    static CREATE_STATE = MY_HOST + 'client/video/create-state';

    static UPLOAD_TOKEN = MY_HOST+'admin/file/upload-token';
    static SAVE_CHANGES = MY_HOST+'client/user/save-changes';
    static DELETE_ACCOUNT = MY_HOST+'client/user/delete-account';

    static TEMPLATE_LIST = MY_HOST + 'client/template/list';
    static MENU_LIST = MY_HOST + 'client/template/menu';
    static SAME_TEMPLATE = MY_HOST + 'client/template/same-template';
    static TEMPLATE_BANNER = MY_HOST + 'client/template/banner';

    static HOME_LIST = MY_HOST +'client/home/list';
    static DISCOVER_LIST = MY_HOST + 'client/discover/list';
    static DISCOVER_DETAIL = MY_HOST + 'client/discover/detail-list';

    static BLOG_INDEX = MY_HOST + 'client/blog/index';
    static BLOG_LIST = MY_HOST + 'client/blog/list';
    static BLOG_QUERY = MY_HOST + 'client/blog/query';
    static BLOG_DETAIL = MY_HOST + 'client/blog/detail';

    static FEATURE_LIST = MY_HOST + 'client/feature/list';

    static PRICE_LIST = MY_HOST + 'client/price/list';
    static PRICE_PER = MY_HOST + 'client/price/per';

    static TEMPLATE_DETAIL = MY_HOST + 'client/template/template-detail';
    static DISCOVER_BANNER = MY_HOST + 'client/discover/banner';

    static SYSTEM_MEDIA  = MY_HOST + 'client/media/system-media';

    static FAVORITES_LIST = MY_HOST + 'client/favorites/list';

    static USER_MEDIA  = MY_HOST + 'client/media/user-media';

    static MY_VIDEO_LIST = MY_HOST + 'client/myVideo/list';
    static USER_MEDIA_DELETE = MY_HOST + 'client/media/delete-user-media';

    static ALIPAY_URL = MY_HOST + 'client/price/alipay-url';
    static CHECK_COUPON = MY_HOST + 'client/price/check-coupon';

    static WECHAT_PRE_PAY = MY_HOST + 'client/price/wechat-pre-pay';



    static SAVE_FEEDBACK = MY_HOST + 'admin/feedback/save-feedback';

    static IMAGE_CLIP = MY_HOST + 'client/file/image-clip';
    static RECOMMEND_TEMPLATE = MY_HOST + 'client/discover/recommend-template';

    static OTHER_TEMPLATE = MY_HOST + 'client/template/other-template';

    static PRODUCT_TEMPLATE = MY_HOST + 'client/template/product-template';

    static CHECK_USER_TYPE = MY_HOST + 'client/user/check-user-type';

    static GET_RENDER_PROGRESS = MY_HOST +'client/template/scene-render-state';

    static CHECK_USER_PAY_TYPE = MY_HOST + 'client/user/check-user-pay-type';

    static IMAGE_TO_ADVANCE = MY_HOST + 'client/video/image-module-to-advance';
    static DOWNLOAD_MSG = MY_HOST + 'client/video/download-msg';
    static VIDEO_CONVERT_PROGRESS = MY_HOST + 'client/video/video-convert-process';

    static TEMPLATE_DETAIL_SAVE_FAVORITE = MY_HOST + 'client/template/detail-save-favorite';
    static TEMPLATE_DETAIL_DELETE_FAVORITE = MY_HOST + 'client/template/detail-delete-favorite';

    static DISCOVER_SAVE_FAVORITE = MY_HOST + 'client/discover/discover-save-favorite';
    static DISCOVER_DELETE_FAVORITE = MY_HOST + 'client/discover/discover-delete-favorite';

    static QUERY_VIDEO_INFO = MY_HOST + 'client/myVideo/query';


    static PRESET_LIST = MY_HOST + 'client/template/preset-list';
    static PRESET_SCENE_DETAIL = MY_HOST + 'client/template/preset-scene-detail';

    static QQ_AUTH_PAGE = MY_HOST + 'client/user/qq-auth-page';
    static QQ_USER_INFO = MY_HOST + 'client/user/qq';

    static WECHAT_AUTH_PAGE = MY_HOST + 'client/user/wechat-auth-page';
    static WECHAT_USER_INFO = MY_HOST + 'client/user/wechat';

    static MICROBLOG_AUTH_PAGE = MY_HOST + 'client/user/microblog-auth-page';
    static MICROBLOG_USER_INFO = MY_HOST + 'client/user/microblog';

    static USER_INFO = MY_HOST + 'client/user/info';

    static  DOWNLOAD_VIDEO = MY_HOST + 'client/myVideo/download-video';

    static RENDER_HIGH = MY_HOST + 'client/myVideo/render-high';

    static USED_STORAGE = MY_HOST + 'client/user/storage';
    static CHECK_LIMIT_TIME = MY_HOST + 'client/user/check-limit-time';

    static CHECK_LOGIN = MY_HOST + 'client/user/check-login';
}

