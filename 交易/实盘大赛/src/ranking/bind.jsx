 module.exports = class Bind extends React.Component {
    constructor(...args) {
        super(...args);
    }
    handBind(){
        window.location = 'http://t.jrj.com.cn/openAccount/activity/index.jspa?type=openAccount&tgqdcode=M582DBXT'
    }
    render() {
        return (
            <div class='bind-brank'>
                <div class="text">
                    小顾检测到您尚未绑定平安账户，要绑定平安账户才能进入收益排名哦～
                </div>
                <div class="btn" onClick={this.handBind}>去绑定</div>
            </div>
        );
    }
}