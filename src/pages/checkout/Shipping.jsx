import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m={"30px auro"}>
      {/* Billing Form  */}
      <Box>
        <Typography sc={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            ></Checkbox>
          }
        ></FormControlLabel>
      </Box>

      {/* Shipping Form  */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sc={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
