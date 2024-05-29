export default function ContactBox(props) {
    return (
        <div>
            <div className="flex dark:hidden items-center flex-col md:flex-row gap-5 md:gap-4 ">
                {
                    props.svgDiv
                }
                <div className="flex flex-col items-start gap-1 md:gap-[14px]">
                    <h4 className="font-DanaMadium text-sm md:text-lg font-semibold text-zinc-700 dark:text-white">{props.title}</h4>
                    <p className="font-DanaMadium text-xs md:text-sm text-zinc-700 dark:text-white">{props.desc}</p>
                </div>
            </div>
            <div className="dark:flex hidden items-center flex-col md:flex-row gap-5 md:gap-4 ">
                {
                    props.svgDivDark
                }
                <div className="flex flex-col items-start gap-1 md:gap-[14px]">
                    <h4 className="font-DanaMadium text-sm md:text-lg font-semibold text-zinc-700 dark:text-white">{props.title}</h4>
                    <p className="font-DanaMadium text-xs md:text-sm text-zinc-700 dark:text-white">{props.desc}</p>
                </div>
            </div>
        </div>
    );
};
