/* eslint-disable jsx-a11y/anchor-is-valid */
import { CreateAccountContainer, Input, Button, CreateAccountForm, Flex, Flex2, Flex3, Flex4, Flex5, Body, Label } from "../Auth-pages-styles/CreateAccount.styled";
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
            <CreateAccountContainer>
                <Flex>
                    <div className="create-account-title">Create Account</div>
                    <div className="cancel-create-account">
                        <LoginSvg />
                    </div>
                </Flex>

                <CreateAccountForm onSubmit={handleSubmit}>
                    <Flex2>
                        <div className="create-account-with-google">
                            Create Account with  &nbsp;  <GoogleSvg />
                        </div>
                        <div className="create-account-with-facebook">
                            Create Account with  &nbsp;  <FacebookSvg />
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
                    <Button type="submit">Register</Button>
                    <Flex4>
                        <p className="register-here">
                            <span>Are you a seller? </span>
                            Register here
                        </p>
                    </Flex4>
                    <Flex5>
                        <p className="login">
                            <span>Already have an account? </span>
                            Login
                        </p>
                    </Flex5>
                </CreateAccountForm>
            </CreateAccountContainer>
        </Body>
    )
}
