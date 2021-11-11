const quotes = [
    {
        quote: "주식시장처럼 역사가 자주 되풀이 되는 곳도 없다.",
        author: "제시 리버모어",
    },
    {
        quote: "상승장에서는 아무나 돈을 번다. 자신이 똑똑해서 수익을 냈다고 착각하지 마라.",
        author: "짐 로저스",
    },
    {
        quote: "근본적인 투자 기회는 경기변동에 있다.",
        author: "마크 파버",
    },
    {
        quote: "해외 투자는 필수다.",
        author: "짐 로저스",
    },
    {
        quote: "무엇을 완전히 이해하기 전에는 성급하게 투자에 나서지 마라. 기회인지 아닌지 모를 때는 은행에 넣어두고 다음 기회를 기다리는 것이 가장 현명한 투자이다.",
        author: "짐 로저스",
    },
    {
        quote: "최적의 매수 타이밍은 시장에 피가 낭자할 때다. 설령 그것이 당신의 피일지라도 말이다.",
        author: "앤서니 볼턴",
    },
    {
        quote: "나는 내가 투자하는 주식의 목표 가격을 정했던 적이 한번도 없다.",
        author: "앤서니 볼턴",
    },
    {
        quote: "원칙을 포기하지 마라. 여러분이 믿지 않는 다른 무언가를 시도하지 마라.",
        author: "앤서니 볼턴",
    },
    {
        quote: "종이 위에 여러분의 초장기 포트폴리오를 적어보라. 그것이 여러분이 보유하고 있는 현재의 포트폴리오와 어떻게 다른지 살펴 보라.",
        author: "앤서니 볼턴",
    },
    {
        quote: "'스마트 머니'로 분류할 수 있는 것 따윈 없다. '멍창한(stupid) 머니' 나 '더 멍청한(stupider) 머니' 같은 것은 있을지도 모른다. 하지만 스마트 머니는 없다.",
        author: "켄 피셔",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;