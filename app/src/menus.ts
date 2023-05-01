export interface MenuItem {
    label: string;
    link: string;
    icon?: string;
}

export const secondaryMenu: MenuItem[] = [
    {
        label: "GitHub",
        link: "https://github.com/OpenAccessGPT/open-access-gpt",
        icon: "github fab",
    },
    {
        label: "Feedback",
        link: "https://tally.so/r/3lBZko",
        icon: "comment",
    },    
];