import { menuItemType, investmentType, transactionType } from "@/types/types";

//menu items
export const menuItemsData: menuItemType[] = [
    {
        title: `Dashboard`,
        url: "/",
        iconName: `bi-grid-1x2-fill`,
    },
    {
        title: `Exchange`,
        url: "/exchange",
        iconName: `bi-currency-exchange`,
    },
    {
        title: `Wallet`,
        url: "/wallet",
        iconName: `bi-wallet-fill`,
    },
    {
        title: `Transactions`,
        url: "/transactions",
        iconName: `bi-cash`,
    },
    {
        title: `Analytics`,
        url: "/analytics",
        iconName: `bi-activity`,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-chat-left-text-fill`,
    },
    {
        title: `Help Center`,
        url: "/help",
        iconName: `bi-info-circle-fill`,
    },
    {
        title: `Settings`,
        url: "/settings",
        iconName: `bi-gear-wide`,
    },
];

// investments data
export const investmentData: investmentType[] = [
    {
        title: "Uniliver",
        img: "uniliver.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 11863,
        variant: -3.23,
        variant_color: "text-colorDanger",
    },
    {
        title: "Tesla",
        img: "tesla.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 51863,
        variant: +13.21,
        variant_color: "text-colorSuccess",
    },
    {
        title: "Monster",
        img: "monster.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 5307,
        money: 31863,
        variant: 17.01,
        variant_color: "text-colorSuccess",
    },
    {
        title: "McDonalds",
        img: "mcdonalds.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 622,
        money: 21863,
        variant: -3.23,
        variant_color: "text-colorDanger",
    },

]

// transactions data
export const transactionstData: transactionType[] = [
    {
        icon: "bi-headphones",
        icon_color: "text-colorPurple",
        icon_bg: "bg-colorPurpleLight",
        title: "Music",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDanger",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },
    {
        icon: "bi-bag-fill",
        icon_color: "text-colorPurple",
        icon_bg: "bg-colorPurpleLight",
        title: "Shopping",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },
    {
        icon: "bi-cup-fill",
        icon_color: "text-colorSuccess",
        icon_bg: "bg-colorSuccessLight",
        title: "Restaurant",
        date: "01.01.1998",
        card_icon: "master-card.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },
    {
        icon: "bi-joystick",
        icon_color: "text-colorDanger",
        icon_bg: "bg-colorDangerLight",
        title: "Games",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDanger",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },
    {
        icon: "bi-capsule",
        icon_color: "text-colorDanger",
        icon_bg: "bg-colorDangerLight",
        title: "Pharmacy",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },
    {
        icon: "bi-headphones",
        icon_color: "text-colorSuccess",
        icon_bg: "bg-colorSuccessLight",
        title: "Fitness",
        date: "01.01.1998",
        card_icon: "master-card.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type:"Credit Card",
        money: 24,
    },

]