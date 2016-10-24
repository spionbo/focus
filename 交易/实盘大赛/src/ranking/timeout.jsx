module.exports = class Timeout extends React.Component {
    constructor(...args) {
        super(...args);
    }
    static show(){
        var bind1 = new bind();
        ReactDOM.render(
            <div class='timeout'>
                <div class="loadding">
                    <i></i>
                    <p>敬请期待···</p>
                </div>
                <p class="text">参赛收益将于10月24日正式开赛后进行统计！</p>
            </div>,
           document.getElementById('Profit')
        );
    }
}
