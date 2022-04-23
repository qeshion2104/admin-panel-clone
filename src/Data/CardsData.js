import {
    UilMoneyWithdraw,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons"

export const cardsData = [
    {
        title: "Sales",
        color: {
            background: "var(--primary-card-1-color)",
            boxShadow: "var(--primary-card-1-shadow)",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdraw,
        series: [
            {
                name: "Sales",
                data: [10, 100, 50, 70, 80, 30]
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            background: "var(--primary-card-2-color)",
            boxShadow: "var(--primary-card-2-shadow)",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdraw,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30]
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            background: "var(--primary-card-3-color)",
            boxShadow: "var(--primary-card-3-shadow)",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 100, 50, 70, 80, 30]
            }
        ]
    },
]