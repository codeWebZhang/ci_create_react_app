const menu = [
    {
        key: "dashboard",
        title: "概览"
    },
    {
        key: "product",
        title: "产品管理"
    },
    {
        key: "device",
        title: "设备",
        children: [
            {
                key: "device/list",
                title: "设备管理"
            },
            {
                key: "device/group",
                title: "分组管理"
            },
            {
                key: "device/batch",
                title: "批次管理"
            }
        ]
    },
    {
        key: "alarm",
        title: "告警",
        children: [
            {
                key: "alarm/board",
                title: "告警看板"
            },
            {
                key: "alarm/search",
                title: "告警查询"
            }
        ]
    },
    {
        key: "rule",
        title: "规则引擎",
        children: [
            {
                key: "rule/alarm",
                title: "告警规则"
            },
            {
                key: "rule/linkage",
                title: "联动规则"
            }
        ]
    },
    {
        key: "workflow",
        title: "工单"
    },
    {
        key: "application",
        title: "应用"
    },
    {
        key: "system",
        title: "系统管理",
        children: [
            {
                key: "system/user",
                title: "用户"
            },
            {
                key: "system/role",
                title: "角色"
            },
            {
                key: "system/organization",
                title: "组织机构"
            },
            {
                key: "system/tenant",
                title: "租户"
            },
            {
                key: "system/log",
                title: "日志"
            }
        ]
    }
];

const breadcrumb = [
    {
        key: "dashboard",
        title: "概览"
    },
    {
        key: "dashboardsys",
        title: "概览"
    },
    {
        key: "product",
        title: "产品管理"
    },
    {
        key: "device",
        title: "设备",
        children: [
            {
                key: "device/list",
                title: "设备管理",
                children: [
                    {
                        key: "device/list/info",
                        title: "查看设备",
                        children: [
                            {
                                key: "device/list/info/expect_history",
                                title: "历史数据",
                            },
                            {
                                key: "device/list/info/telemetry_history",
                                title: "历史数据",
                            },
                            {
                                key: "device/list/info/action_history",
                                title: "历史动作",
                            }]
                    },
                    {
                        key: "device/list/create",
                        title: "新增设备"
                    }
                ]
            },
            {
                key: "device/group",
                title: "分组管理"

            },
            {
                key: "device/batch",
                title: "批次管理"


            }
        ]
    },
    {
        key: "alarm",
        title: "告警",
        children: [
            {
                key: "alarm/board",
                title: "告警看板"
            },
            {
                key: "alarm/search",
                title: "告警查询"
            }
        ]
    },
    {
        key: "rule",
        title: "规则引擎",
        children: [
            {
                key: "rule/alarm",
                title: "告警规则"
            },
            {
                key: "rule/linkage",
                title: "联动规则"
            }
        ]
    },
    {
        key: "workflow/list",
        title: "工单",
        children: [
            {
                key: "workflow/list/info",
                title: "查看工单",
            },
            {
                key: "workflow/list/create",
                title: "新增工单"
            }]
    },
    {
        key: "application",
        title: "应用"
    },
    {
        key: "system",
        title: "系统管理",
        children: [
            {
                key: "system/user",
                title: "用户"
            },
            {
                key: "system/role",
                title: "角色"
            },
            {
                key: "system/organization",
                title: "组织机构"
            },
            {
                key: "system/tenant",
                title: "租户"
            },
            {
                key: "system/log",
                title: "日志"
            }
        ]
    },
    {
        key: "user/profile",
        title: "个人中心",

    }
];
const config = {
    menu,
    breadcrumb
};

export { config };
