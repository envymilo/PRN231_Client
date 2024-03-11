"use client";
import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Page = () => {
  const [selected, setSelected] = useState<string | number>("login");

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string().min(6, "At least 6 digits").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "At least 2")
        .max(50, "Maximum 50")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string().min(6, "At least 6 digits").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col w-full grid h-screen place-content-center">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form
                className="flex flex-col gap-4"
                onSubmit={signInFormik.handleSubmit}
                onReset={signInFormik.handleReset}
              >
                <Input
                  id="email"
                  value={signInFormik.values.email}
                  onChange={signInFormik.handleChange}
                  onBlur={signInFormik.handleBlur}
                  isInvalid={
                    !!(signInFormik.touched.email && signInFormik.errors.email)
                  }
                  errorMessage={
                    signInFormik.touched.email && signInFormik.errors.email
                  }
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  id="password"
                  value={signInFormik.values.password}
                  onChange={signInFormik.handleChange}
                  onBlur={signInFormik.handleBlur}
                  isInvalid={
                    !!(
                      signInFormik.touched.password &&
                      signInFormik.errors.password
                    )
                  }
                  errorMessage={
                    signInFormik.touched.password &&
                    signInFormik.errors.password
                  }
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  id="name"
                  value={signUpFormik.values.name}
                  onChange={signUpFormik.handleChange}
                  onBlur={signUpFormik.handleBlur}
                  isInvalid={
                    !!(signUpFormik.touched.name && signUpFormik.errors.name)
                  }
                  errorMessage={
                    signUpFormik.touched.name && signUpFormik.errors.name
                  }
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="password"
                />
                <Input
                  id="email"
                  value={signUpFormik.values.email}
                  onChange={signUpFormik.handleChange}
                  onBlur={signUpFormik.handleBlur}
                  isInvalid={
                    !!(signUpFormik.touched.email && signUpFormik.errors.email)
                  }
                  errorMessage={
                    signUpFormik.touched.email && signUpFormik.errors.email
                  }
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  id="password"
                  value={signUpFormik.values.password}
                  onChange={signUpFormik.handleChange}
                  onBlur={signUpFormik.handleBlur}
                  isInvalid={
                    !!(
                      signUpFormik.touched.password &&
                      signUpFormik.errors.password
                    )
                  }
                  errorMessage={
                    signUpFormik.touched.password &&
                    signUpFormik.errors.password
                  }
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

//export deffault laf gif
//export la gif

export default Page;
