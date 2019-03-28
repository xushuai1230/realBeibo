//-1全部，1存款，2提现，3转账，4红利，5其他
//1充值，2提现，3充值手续费，4提现手续费，5人工加币，6人工减币，7红利，8返水
export const ALL = -1;
export const ORDER_TYPE = '1,2,3,4,5,6,8';
export const TRADE_TYPE = [{
        title: '全部',
        value: ORDER_TYPE,
    },
    {
        title: '充值',
        value: 1,
    },
    {
        title: '提现',
        value: 2,
    },
    {
        title: '转账',
        value: 3,
    },
    {
        title: '红利',
        value: 4,
    },
    {
        title: '返水',
        value: 8,
    },
    {
        title: '其他',
        value: 5,
    },
];

//-1全部，0处理中，1成功，2失败

const TRADE_STATUS_SUCCESS = 1;
const TRADE_STATUS_FAILURE = 2;
const TRADE_STATUS_PROCESSING = 0;

export const TRADE_STATUS = [{
        title: '全部',
        value: ALL
    },
    {
        title: '成功',
        value: TRADE_STATUS_SUCCESS,
        label: 'check',
        type: 'primary',
    },
    {
        title: '失败',
        value: TRADE_STATUS_FAILURE,
        label: 'close',
        type: 'danger',
    },
    {
        title: '处理中',
        value: TRADE_STATUS_PROCESSING,
        label: 'processing',
        type: 'warning',
    },
];

export const TODAY = 1;
export const YESTERDAY = 2;
export const THIS_WEEK = 3;
export const LAST_WEEK = 4;
export const THIS_MONTH = 5;
export const LAST_MONTH = 6;

export const TIME_PERIOD = [{
        title: '今天',
        value: TODAY,
        start: [0, 'day'],
        end: [0, 'day'],
    },
    {
        title: '昨天',
        value: YESTERDAY,
        start: [-1, 'day'],
        end: [-1, 'day'],
    },
    {
        title: '本周',
        value: THIS_WEEK,
        start: [0, 'week'],
        end: [0, 'week'],
    },
    {
        title: '上周',
        value: LAST_WEEK,
        start: [-1, 'week'],
        end: [-1, 'week'],
    },
    {
        title: '本月',
        value: THIS_MONTH,
        start: [0, 'month'],
        end: [0, 'day'],
    },
    {
        title: '上月',
        value: LAST_MONTH,
        start: [-1, 'month'],
        end: [-1, 'month'],
    },
];
//公告阅读
export const ANNOUNCEMENT_UNREAD = 0;
export const ANNOUNCEMENT_READ = 1;


//推广资源
//类型
export const EXTENSIONTYPE = [{
        name: '全部',
        value: -1
    },
    {
        value: 1,
        name: "品牌"
    }, {
        value: 2,
        name: "优惠"
    }, {
        value: 3,
        name: "产品"
    }, {
        value: 4,
        name: "祝福语"
    }
]
//尺寸
export const EXTENSIONSIZE = [{
        name: '全部',
        value: -1
    },
    {
        value: "1",
        name: "100*100"
    }, {
        value: "2",
        name: "100*200"
    }, {
        value: "3",
        name: "100*300"
    }
]