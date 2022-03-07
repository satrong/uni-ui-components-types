import type {
  DefineComponent, ComputedOptions,
  MethodOptions, ComponentOptionsMixin,
  VNodeProps, AllowedComponentProps, ComponentCustomProps,
  ExtractPropTypes, EmitsOptions
} from 'vue'
type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

type TComponent<P extends Record<string, any>, E extends EmitsOptions = EmitsOptions> = DefineComponent<{}, {}, {}, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, E, string, PublicProps, Readonly<ExtractPropTypes<P>>>

type TUniBadge = TComponent<{ type: string; inverted: boolean; isDot: boolean; maxNum: number; absolute: string; offset: any[]; text: string | number; size: string; customStyle: Record<string, any>; }>

type TUniCalendar = TComponent<{ date: string; selected: any[]; lunar: boolean; startDate: string; endDate: string; range: boolean; insert: boolean; showMonth: boolean; clearDate: boolean; }>

type TUniCard = TComponent<{ title: string; subTitle: string; padding: string; margin: string; spacing: string; extra: string; cover: string; thumbnail: string; isFull: boolean; isShadow: boolean; shadow: string; border: boolean; }>

type TUniCol = TComponent<{ span: number; offset: number; pull: number; push: number; }>

type TUniCollapse = TComponent<{ value: string | any[]; modelValue: string | any[]; accordion: boolean | string; }>

type TUniCollapseItem = TComponent<{ title: string; name: number | string; disabled: boolean; showAnimation: boolean; open: boolean; thumb: string; titleBorder: string; border: boolean; showArrow: boolean; }>

type TUniCombox = TComponent<{ border: boolean; label: string; labelWidth: string; placeholder: string; candidates: any[]; emptyTips: string; value: string | number; modelValue: string | number; }>

type TUniCountdown = TComponent<{ showDay: boolean; showColon: boolean; start: boolean; backgroundColor: string; color: string; fontSize: number; splitorColor: string; day: number; hour: number; minute: number; second: number; timestamp: number; }>

type TUniDataChecklist = TComponent<{ mode: string; multiple: boolean; value: any[] | string | number; modelValue: any[] | string | number; localdata: any[]; min: number | string; max: number | string; wrap: boolean; icon: string; selectedColor: string; selectedTextColor: string; emptyText: string; disabled: boolean; map: Record<string, any>; }>

type TUniDataPicker = TComponent<{ options: Record<string, any> | any[]; popupTitle: string; placeholder: string; heightMobile: string; readonly: boolean; clearIcon: boolean; border: boolean; split: string; ellipsis: boolean; }>

type TUniDataPickerView = TComponent<{ managedMode: boolean; ellipsis: boolean; }>

type TUniDateformat = TComponent<{ date: Record<string, any> | string | number; locale: string; threshold: any[]; format: string; refreshRate: number | string; }>

type TUniDatetimePicker = TComponent<{ type: string; value: string | number | any[] | Date; modelValue: string | number | any[] | Date; start: number | string; end: number | string; returnType: string; placeholder: string; startPlaceholder: string; endPlaceholder: string; rangeSeparator: string; border: boolean; disabled: boolean; clearIcon: boolean; hideSecond: boolean; }>

type TUniDrawer = TComponent<{ mode: string; mask: boolean; maskClick: boolean; width: number; }>

type TUniEasyinput = TComponent<{ name: string; type: string; clearable: boolean; autoHeight: boolean; placeholder: string; placeholderStyle: string; focus: boolean; disabled: boolean; maxlength: number | string; confirmType: string; clearSize: number | string; inputBorder: boolean; prefixIcon: string; suffixIcon: string; trim: boolean | string; passwordIcon: boolean; styles: Record<string, any>; errorMessage: string | boolean; }>

type TUniFab = TComponent<{ pattern: Record<string, any>; horizontal: string; vertical: string; direction: string; content: any[]; show: boolean; popMenu: boolean; }>

type TUniFav = TComponent<{ star: boolean | string; bgColor: string; fgColor: string; bgColorChecked: string; fgColorChecked: string; circle: boolean | string; checked: boolean; contentText: Record<string, any>; }>

type TUniFilePicker = TComponent<{ modelValue: any[] | Record<string, any>; value: any[] | Record<string, any>; disabled: boolean; disablePreview: boolean; delIcon: boolean; autoUpload: boolean; limit: number | string; mode: string; fileMediatype: string; fileExtname: any[] | string; title: string; listStyles: Record<string, any>; imageStyles: Record<string, any>; readonly: boolean; returnType: string; sizeType: any[]; }>

type TUniForms = TComponent<{ value: Record<string, any>; modelValue: Record<string, any>; rules: Record<string, any>; validateTrigger: string; labelPosition: string; labelWidth: string | number; labelAlign: string; errShowType: string; border: boolean; }>

type TUniFormsItem = TComponent<{ custom: boolean; showMessage: boolean; name: string; required: boolean; validateTrigger: string; leftIcon: string; iconColor: string; label: string; labelWidth: number | string; labelAlign: string; labelPosition: string; errorMessage: string | boolean; rules: any[]; }>

type TUniGoodsNav = TComponent<{ options: any[]; buttonGroup: any[]; fill: boolean; }>

type TUniGrid = TComponent<{ column: number; showBorder: boolean; borderColor: string; square: boolean; highlight: boolean; }>

type TUniGridItem = TComponent<{ index: number; }>

type TUniGroup = TComponent<{ title: string; top: number | string; mode: string; }>

type TUniIcons = TComponent<{ type: string; color: string; size: number | string; customPrefix: string; }>

type TUniIndexedList = TComponent<{ options: any[]; showSelect: boolean; }>

type TUniLink = TComponent<{ href: string; text: string; download: string; showUnderLine: boolean | string; copyTips: string; color: string; fontSize: number | string; }>

type TUniList = TComponent<{ enableBackToTop: boolean | string; scrollY: boolean | string; border: boolean; }>

type TUniListAd = TComponent<{ title: string; }>

type TUniListChat = TComponent<{ title: string; note: string; clickable: boolean; link: boolean | string; to: string; badgeText: string | number; badgePositon: string; time: string; avatarCircle: boolean; avatar: string; avatarList: any[]; }>

type TUniListItem = TComponent<{ direction: string; title: string; note: string; ellipsis: number | string; disabled: boolean | string; clickable: boolean; showArrow: boolean | string; link: boolean | string; to: string; showBadge: boolean | string; showSwitch: boolean | string; switchChecked: boolean | string; badgeText: string; badgeType: string; badgeStyle: Record<string, any>; rightText: string; thumb: string; thumbSize: string; showExtraIcon: boolean | string; extraIcon: Record<string, any>; border: boolean; }>

type TUniLoadMore = TComponent<{ status: string; showIcon: boolean; iconType: string; iconSize: number; color: string; contentText: Record<string, any>; showText: boolean; }>

type TUniNavBar = TComponent<{ dark: boolean; title: string; leftText: string; rightText: string; leftIcon: string; rightIcon: string; fixed: boolean | string; color: string; backgroundColor: string; statusBar: boolean | string; shadow: boolean | string; border: boolean | string; height: number | string; leftWidth: number | string; rightWidth: number | string; }>

type TUniNoticeBar = TComponent<{ text: string; moreText: string; backgroundColor: string; speed: number; color: string; moreColor: string; single: boolean | string; scrollable: boolean | string; showIcon: boolean | string; showGetMore: boolean | string; showClose: boolean | string; }>

type TUniNumberBox = TComponent<{ value: number | string; modelValue: number | string; min: number; max: number; step: number; background: string; color: string; disabled: boolean; }>

type TUniPagination = TComponent<{ value: number | string; modelValue: number | string; prevText: string; nextText: string; current: number | string; total: number | string; pageSize: number | string; showIcon: boolean | string; pagerCount: number; }>

type TUniPopup = TComponent<{ animation: boolean; type: string; isMaskClick: boolean; maskClick: boolean; backgroundColor: string; safeArea: boolean; maskBackgroundColor: string; }>

type TUniPopupDialog = TComponent<{ value: string | number; placeholder: string | number; type: string; mode: string; title: string; content: string; beforeClose: boolean; cancelText: string; confirmText: string; }>

type TUniPopupMessage = TComponent<{ type: string; message: string; duration: number; maskShow: boolean; }>

type TUniPopupShare = TComponent<{ title: string; beforeClose: boolean; }>

type TUniRate = TComponent<{ isFill: boolean | string; color: string; activeColor: string; disabledColor: string; size: number | string; value: number | string; modelValue: number | string; max: number | string; margin: number | string; disabled: boolean | string; readonly: boolean | string; allowHalf: boolean | string; touchable: boolean | string; }>

type TUniRow = TComponent<{ type: string; gutter: number; justify: string; align: string; width: string | number; }>

type TUniSearchBar = TComponent<{ placeholder: string; radius: number | string; clearButton: string; cancelButton: string; cancelText: string; bgColor: string; maxlength: number | string; value: number | string; modelValue: number | string; focus: boolean; }>

type TUniSegmentedControl = TComponent<{ current: number; values: any[]; activeColor: string; styleType: string; }>

type TUniSteps = TComponent<{ direction: string; activeColor: string; deactiveColor: string; active: number; activeIcon: string; options: any[]; }>

type TUniSwipeAction = TComponent<{}>

type TUniSwipeActionItem = TComponent<{ show: string; disabled: boolean; autoClose: boolean; threshold: number; leftOptions: any[]; rightOptions: any[]; }>

type TUniSwiperDot = TComponent<{ info: any[]; current: number; dotsStyles: Record<string, any>; mode: string; field: string; }>

type TUniTable = TComponent<{ data: any[]; border: boolean; stripe: boolean; type: string; emptyText: string; loading: boolean; rowKey: string; }>

type TUniTag = TComponent<{ type: string; size: string; text: string; disabled: boolean | string; inverted: boolean | string; circle: boolean | string; mark: boolean | string; customStyle: string; }>

type TUniBody = TComponent<{}>

type TUniTd = TComponent<{ width: string | number; align: string; rowspan: number | string; colspan: number | string; }>

type TUniTh = TComponent<{ width: string | number; align: string; rowspan: number | string; colspan: number | string; sortable: boolean; filterType: string; filterData: any[]; }>

type TUniThead = TComponent<{}>

type TUniTitle = TComponent<{ type: string; title: string; align: string; color: string; stat: boolean | string; }>

type TUniTr = TComponent<{ disabled: boolean; keyValue: string | number; }>

type TUniTransition = TComponent<{ show: boolean; modeClass: any[] | string; duration: number; styles: Record<string, any>; customClass: string; }>

declare module 'vue' {
  export interface GlobalComponents {
    UniBadge: TUniBadge;
    UniCalendar: TUniCalendar;
    UniCard: TUniCard;
    UniCol: TUniCol;
    UniCollapse: TUniCollapse;
    UniCollapseItem: TUniCollapseItem;
    UniCombox: TUniCombox;
    UniCountdown: TUniCountdown;
    UniDataChecklist: TUniDataChecklist;
    UniDataPicker: TUniDataPicker;
    UniDataPickerView: TUniDataPickerView;
    UniDateformat: TUniDateformat;
    UniDatetimePicker: TUniDatetimePicker;
    UniDrawer: TUniDrawer;
    UniEasyinput: TUniEasyinput;
    UniFab: TUniFab;
    UniFav: TUniFav;
    UniFilePicker: TUniFilePicker;
    UniForms: TUniForms;
    UniFormsItem: TUniFormsItem;
    UniGoodsNav: TUniGoodsNav;
    UniGrid: TUniGrid;
    UniGridItem: TUniGridItem;
    UniGroup: TUniGroup;
    UniIcons: TUniIcons;
    UniIndexedList: TUniIndexedList;
    UniLink: TUniLink;
    UniList: TUniList;
    UniListAd: TUniListAd;
    UniListChat: TUniListChat;
    UniListItem: TUniListItem;
    UniLoadMore: TUniLoadMore;
    UniNavBar: TUniNavBar;
    UniNoticeBar: TUniNoticeBar;
    UniNumberBox: TUniNumberBox;
    UniPagination: TUniPagination;
    UniPopup: TUniPopup;
    UniPopupDialog: TUniPopupDialog;
    UniPopupMessage: TUniPopupMessage;
    UniPopupShare: TUniPopupShare;
    UniRate: TUniRate;
    UniRow: TUniRow;
    UniSearchBar: TUniSearchBar;
    UniSegmentedControl: TUniSegmentedControl;
    UniSteps: TUniSteps;
    UniSwipeAction: TUniSwipeAction;
    UniSwipeActionItem: TUniSwipeActionItem;
    UniSwiperDot: TUniSwiperDot;
    UniTable: TUniTable;
    UniTag: TUniTag;
    UniBody: TUniBody;
    UniTd: TUniTd;
    UniTh: TUniTh;
    UniThead: TUniThead;
    UniTitle: TUniTitle;
    UniTr: TUniTr;
    UniTransition: TUniTransition;
  }
}
