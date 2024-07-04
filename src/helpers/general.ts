import moment from "moment";

export const FILE_STORAGE_STAGE_BE = "";
export const FILE_STORAGE_PROD_BE = "";

export const greetTime = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

export const isLocal = (): boolean => {
  if (window.location.hostname === "localhost") {
    return true;
  } else {
    return false;
  }
};

export const parseJwt = (token: string | null) => {
  if (token !== null) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }
};

export const parseMoneyByFormatAndCurrency = (
  value: any,
  format = "en-US",
  currency = "USD"
) => {
  if (Number.isNaN(parseInt(value))) {
    return value;
  }

  const formated = new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
  }).format(parseInt(value));
  return formated;
};

export const parseDateByFormat = (value: string, format = "DD/MM/YYYY") => {
  const date = moment(value, format);

  const formatedDate = date.format(format);
  return formatedDate;
};

export const isNumeric = (value: string): boolean => {
  return !isNaN(parseInt(value)) && !isNaN(parseFloat(value));
};

export const filePath = (path: string | null) => {
  if (path && path.length > 0)
    return path.replace("localhost", `${FILE_STORAGE_STAGE_BE}/backshared`);
  return "";
};

export const checkValidPhone = (value: any) => {
  const phoneRegExp =
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/;

  return phoneRegExp.test(value);
};

export const checkValidEmail = (value: any) => {
  const regexForEmail = /\S+@\S+\.\S/g;

  return regexForEmail.test(value);
};
export function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export function dateWithMonthText(date: string) {
  try {
    // date format: dd/mm/yyyy hh:mm
    const months = [
      undefined,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.substring(0, 2);
    const month = months[Number(date.substring(3, 5))];

    return `${day} ${month}`;
  } catch (error) {
    return date;
  }
}
