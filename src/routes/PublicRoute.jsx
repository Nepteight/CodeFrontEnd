// import pages
import { App } from "../App";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";
import { ForgetPage } from "../pages/auth/ForgetPage";
import { ShopPage } from "../pages/public/ShopPage";
import { ProductDetail } from "../pages/public/ProductDetail";
import { CartPage } from "../pages/public/CartPage";
import { CheckoutPage } from "../pages/public/CheckoutPage";
import { BlogPage } from "../pages/public/BlogPage";
import { BlogDetailPage } from "../pages/public/BlogDetailPage";
import { ProfileSettingPage } from "../pages/public/ProfileSettingPage";
import { SecuritySettingPage } from "../pages/public/SecuritySettingPage";
import { CustomerOrderPage } from "../pages/public/CustomerOrderPage";
import { VerifyPage } from "../pages/auth/VerifyPage";
import { ResetPassPage } from "../pages/auth/ResetPassPage";
// wrapper
import { LoggedWrapper, GuestWrapper } from "./AuthorizeWrapper";
export const publicRoutes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <LoggedWrapper>
        <LoginPage />
      </LoggedWrapper>
    ),
  },
  {
    path: "/signup",
    element: (
      <LoggedWrapper>
        <SignupPage />
      </LoggedWrapper>
    ),
  },
  {
    path: "/forget",
    element: (
      <LoggedWrapper>
        <ForgetPage />
      </LoggedWrapper>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <LoggedWrapper>
        <VerifyPage />
      </LoggedWrapper>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <LoggedWrapper>
        <ResetPassPage />
      </LoggedWrapper>
    ),
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/category/:cateId",
    element: <ShopPage />,
  },
  {
    path: "/productdetail/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
  {
    path: "/blogdetail/:blogId",
    element: <BlogDetailPage />,
  },
  {
    path: "/setting/profile",
    element: (
      <GuestWrapper>
        <ProfileSettingPage />
      </GuestWrapper>
    ),
  },
  {
    path: "/setting/security",
    element: (
      <GuestWrapper>
        <SecuritySettingPage />
      </GuestWrapper>
    ),
  },
  {
    path: "/setting/my-order",
    element: (
      <GuestWrapper>
        <CustomerOrderPage />
      </GuestWrapper>
    ),
  },
];
