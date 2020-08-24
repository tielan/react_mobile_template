import React, { Component } from 'react'
import styles from "./Index.module.css"
import "./Index.less"
import { Button } from "antd-mobile"

export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login() {
        sessionStorage.setItem("user", JSON.stringify({ uid: "123" }))
        this.props.history.push("/index")
    }
    render() {
        let { user } = this.state
        return (
            <div className="login">
                <main>
                    <div className="login-tel">账号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} /></div>
                    <div className="login-pass">密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, "password")} /></div>
                    <div className={styles.login_button}>
                        <Button type="primary">登录</Button>
                    </div>
                </main>
            </div>
        )
    }
}
