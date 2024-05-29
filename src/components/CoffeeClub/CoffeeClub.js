import KeyboardArrowLeftOutlined from "@mui/icons-material/KeyboardArrowLeftOutlined";

export default function CoffeeClub() {
    return (
        <section className="my-20">
            <div className="container">
                <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-y-[31px] py-3 md:py-[23px] px-8 md:px-[44px] bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl">
                    <div className="flex w-full items-center gap-6">
                        <img className="w-[87px] md:w-[110px] h-[78px] md:h-[98px]" src="/Images/club/diamond.png" alt="" />
                        <div className="child:text-white space-y-2">
                            <h3 className="font-Morabba font-bold text-2xl md:text-5xl">کافی کلاب</h3>
                            <p className="font-Morabba !font-light text-lg md:text-2xl">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-3 md:gap-0 w-full">
                        <div className="flex child:w-[72px] md:child:w-[98px] child:h-[72px] md:child:h-[98px] child:flex child:items-center child:justify-center child:flex-col child:gap-1.5 gap-2 child:bg-white child:rounded-2xl pb-1">
                            <div className="text-emerald-600 font-DanaMadium text-xs md:text-sm">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.8995 3.5606C26.8195 4.0606 26.7795 4.5606 26.7795 5.0606C26.7795 9.5606 30.4195 13.1986 34.8995 13.1986C35.3995 13.1986 35.8795 13.1406 36.3795 13.0606V29.1986C36.3795 35.9806 32.3795 40.0006 25.5795 40.0006H10.8015C3.99951 40.0006 -0.000488281 35.9806 -0.000488281 29.1986V14.4006C-0.000488281 7.6006 3.99951 3.5606 10.8015 3.5606H26.8995ZM27.3015 15.7206C26.7595 15.6606 26.2215 15.9006 25.8995 16.3406L21.0615 22.6006L15.5195 18.2406C15.1795 17.9806 14.7795 17.8786 14.3795 17.9206C13.9815 17.9806 13.6215 18.1986 13.3795 18.5186L7.46151 26.2206L7.33951 26.4006C6.99951 27.0386 7.15951 27.8586 7.75951 28.3006C8.03951 28.4806 8.33951 28.6006 8.67951 28.6006C9.14151 28.6206 9.57951 28.3786 9.85951 28.0006L14.8795 21.5386L20.5795 25.8206L20.7595 25.9386C21.3995 26.2786 22.1995 26.1206 22.6595 25.5186L28.4395 18.0606L28.3595 18.1006C28.6795 17.6606 28.7395 17.1006 28.5195 16.6006C28.3015 16.1006 27.8195 15.7606 27.3015 15.7206ZM35.1797 0C37.8397 0 39.9997 2.16 39.9997 4.82C39.9997 7.48 37.8397 9.64 35.1797 9.64C32.5197 9.64 30.3597 7.48 30.3597 4.82C30.3597 2.16 32.5197 0 35.1797 0Z" fill="#059669" />
                                </svg>
                                <p>ماموریت ها</p>
                            </div>
                            <div className="text-emerald-600 font-DanaMadium text-xs md:text-sm">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9998 0.000183105C31.0398 0.000183105 39.9998 8.96018 39.9998 20.0002C39.9998 31.0602 31.0398 40.0002 19.9998 40.0002C8.93976 40.0002 -0.000244141 31.0602 -0.000244141 20.0002C-0.000244141 8.96018 8.93976 0.000183105 19.9998 0.000183105ZM27.6998 13.4202C27.9198 12.7202 27.2798 12.0602 26.5798 12.2802L16.3398 15.4802C15.9198 15.6202 15.5798 15.9402 15.4598 16.3602L12.2598 26.6202C12.0398 27.3002 12.6998 27.9602 13.3798 27.7402L23.5798 24.5402C23.9998 24.4202 24.3398 24.0802 24.4598 23.6602L27.6998 13.4202Z" fill="#059669" />
                                </svg>
                                <p>چرخ و بخت</p>
                            </div>
                            <div className="text-emerald-600 font-DanaMadium text-xs md:text-sm">
                                <svg width="40" height="40" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.712 0C36.28 0 39.998 3.68403 39.998 8.21028L40 13.5649C40 13.9573 39.842 14.3378 39.562 14.6152C39.28 14.8946 38.9 15.0512 38.5 15.0512C36.858 15.0512 35.522 16.375 35.522 18.002C35.522 19.629 36.858 20.9528 38.5 20.9528C39.328 20.9528 40 21.6186 40 22.4391V27.7917C40 32.318 36.284 36 31.716 36H8.286C3.718 36 0 32.318 0 27.7917V22.4391C0 21.6186 0.672 20.9528 1.5 20.9528C3.144 20.9528 4.48 19.629 4.48 18.002C4.48 16.4166 3.198 15.2236 1.5 15.2236C1.102 15.2236 0.722 15.067 0.44 14.7876C0.158 14.5082 0 14.1297 0 13.7373L0.004 8.21028C0.004 3.68403 3.72 0 8.288 0H31.712ZM20.004 10.3069C19.436 10.3069 18.928 10.6201 18.674 11.1234L17.216 14.0504L13.964 14.5201C13.402 14.5994 12.942 14.9799 12.764 15.5149C12.588 16.05 12.73 16.6286 13.138 17.021L15.496 19.296L14.94 22.5124C14.844 23.0673 15.07 23.6182 15.53 23.9491C15.79 24.1334 16.092 24.2286 16.398 24.2286C16.632 24.2286 16.868 24.1711 17.084 24.0581L20 22.5401L22.91 24.0542C23.414 24.3217 24.012 24.2801 24.47 23.9472C24.932 23.6182 25.158 23.0673 25.062 22.5124L24.504 19.296L26.862 17.021C27.272 16.6286 27.414 16.05 27.236 15.5149C27.06 14.9799 26.6 14.5994 26.044 14.5221L22.786 14.0504L21.328 11.1254C21.078 10.622 20.57 10.3089 20.004 10.3069Z" fill="#059669" />
                                </svg>
                                <p>جایزه ها</p>
                            </div>
                        </div>
                        <div className="child:text-white">
                            <h3 className="text-2xl md:text-3xl font-DanaMadium font-semibold">542</h3>
                            <p className="text-xs md:text-sm font-DanaMadium">امتیـــــــاز شما</p>
                            <button className="flex items-center mt-2 py-1.5 pr-2.5 w-full text-xs md:text-sm font-medium font-DanaMadium rounded-[100px] bg-gradient-to-l from-orange-300 to-orange-200">
                                <span className="min-w-max">دریافت جایزه</span>
                                <KeyboardArrowLeftOutlined />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
