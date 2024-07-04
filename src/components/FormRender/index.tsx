import React, { useEffect, useMemo } from "react";
import styles from "./FormRender.module.scss";
import PageTitle from "../Typography/PageTitle";
import { FormField } from "./formFieldType";
import { useForm, Resolver, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectInput from "./SelectInput";
import ToggleButtons from "./ToggleButtons";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";
import SelectInputMultiple from "./SelectInputMultiple";

interface FormRenderProps {
  onSubmit?: any;
  formFields: FormField[];
  toggleDrawer?: () => void;
  headerText?: any;
  submitBtnText?: string;
  isReadOnly?: boolean;
  defaultValues?: any;
  schema?: any;
  isOrderDetail?: boolean;
  buttonsSize?: number;
  isEdit?: boolean;
}

const FormRender: React.FC<FormRenderProps> = ({
  onSubmit,
  formFields,
  toggleDrawer,
  headerText = "",
  submitBtnText = "Save",
  isReadOnly = false,
  defaultValues = null,
  schema,
  isOrderDetail = false,
  buttonsSize = 6,
  isEdit,
}) => {
  const resolver: Resolver<any, any> | undefined = schema
    ? yupResolver(schema)
    : undefined;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm<any>({
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
    resolver,
    mode: "onChange",
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const renderFormField = (field: FormField, index: number) => {
    if (field.name === "password" && isEdit) {
      return null;
    }

    if (field.type == "select") {
      field.options?.map((item: any) => {
        return {
          ...item,
          value: item.label,
        };
      });
    }

    function isOptioninDefaults(item: any, array: any) {
      array?.map((op: any) => {
        if (op?.label == item?.label) {
          return true;
        }
      });
      return false;
    }

    return (
      <div key={index} className={`col-md-${field.size || 12} col-sm-12 mt-3`}>
        <div className="form-group">
          <label className={styles.labels}>{field.label}</label>
          {field.type === "select" && field.multiple ? (
            <SelectInputMultiple
              input={field}
              control={control}
              isReadOnly={isReadOnly || field.readonly}
              defaultValues={defaultValues}
              getValues={getValues}
            />
          ) : field.type === "select" ? (
            <SelectInput
              input={field}
              control={control}
              isReadOnly={isReadOnly || field.readonly}
            />
          ) : field.type === "textarea" ? (
            <textarea
              rows={8}
              disabled={isReadOnly}
              className="form-control"
              placeholder={field.placeholder}
              {...register(field.name, { required: field.required })}
            />
          ) : field.type === "checkbox" ? (
            <div className="form-check">
              {field.options &&
                field.options.map((item: any, index: number) => (
                  <div key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={
                        defaultValues
                          ? isOptioninDefaults(item, defaultValues[field.name])
                            ? true
                            : false
                          : false
                      }
                      value={item.value ?? item.label}
                      id={`flexCheckDefault_${index}`}
                      {...register(field.name, {
                        required: field.required,
                      })}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDefault_${index}`}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
            </div>
          ) : field.type == "file" ? (
            <>
              <br />
              {defaultValues && defaultValues[field.name] ? (
                <>
                  {typeof defaultValues[field.name] == "string" ||
                  defaultValues[field.name] instanceof String ? (
                    <a href={defaultValues[field.name]} target="_blank">
                      View {field.name}
                    </a>
                  ) : (
                    <a href={defaultValues[field.name]?.path} target="_blank">
                      View {field.name}
                    </a>
                  )}
                </>
              ) : (
                ""
              )}
              <input
                type={field.type}
                className="form-control"
                disabled={isReadOnly || field.readonly}
                placeholder={field.placeholder}
                {...register(field.name, { required: field.required })}
              />
            </>
          ) : (
            <input
              type={field.type}
              className="form-control"
              disabled={isReadOnly || field.readonly}
              placeholder={field.placeholder}
              {...register(field.name, { required: field.required })}
            />
          )}
          {errors[field.name] && (
            <span className={`${styles.error_validation} fs-14`}>
              {errors[field.name]?.message ? (
                errors[field.name]?.message?.toString()
              ) : (
                <span>This field is not valid</span>
              )}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.form_main}>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row">
          <div className="col-8">
            <PageTitle title={headerText} size={22} />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            {formFields.map((field, index) => renderFormField(field, index))}
          </div>
        </div>
        {!isOrderDetail && (
          <ToggleButtons
            buttonsSize={buttonsSize}
            toggleDrawer={toggleDrawer}
            submitBtnText={submitBtnText}
          />
        )}
      </form>
    </div>
  );
};

export default FormRender;
