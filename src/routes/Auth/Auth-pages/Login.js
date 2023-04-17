/* eslint-disable jsx-a11y/anchor-is-valid */
import { LoginContainer, Input, Button, LoginForm, Flex, Flex2, Flex3, Flex4, Flex5, Body, Label } from "../Auth-pages-styles/Login.styled";
import { LoginSvg, FacebookSvg, GoogleSvg } from "../../../components/SvgComponents";
// import { useDispatch } from "react-redux";

export default function Login() {

    // const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        //dispatch
    };

    return (
        <Body>
            <LoginContainer>
                <Flex>
                    <div className="login-title">Login</div>
                    <div className="cancel-login">
                        <LoginSvg />
                    </div>
                </Flex>

                <LoginForm onSubmit={handleSubmit}>
                    <Flex2>
                        <div className="login-with-google">
                            Login with  &nbsp;  <GoogleSvg />
                        </div>
                        <div className="login-with-facebook">
                            Login with  &nbsp;  <FacebookSvg />
                        </div>
                    </Flex2>
                    <Flex3>
                        <div className="or">
                            Or
                        </div>
                    </Flex3>
                    <Label for="email">Email Address</Label>
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        id="email"
                        required
                    />
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        id="password"
                        required
                    />
                    <Button type="submit">Login</Button>
                    <Flex4>
                        <p className="forgot-password">
                            Forgot Password?
                        </p>
                    </Flex4>
                    <Flex5>
                        <p className="register">
                            <span>Don't have an account? </span>
                            Register
                        </p>
                    </Flex5>
                </LoginForm>
            </LoginContainer>
        </Body>
    )
}
