import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

interface Props extends Omit<XmlProps, 'xml'> {
  size: number;
  color: string;
}

const CompareIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <SvgXml
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_219_8613)">
          <path d="M8.56002 11.9C8.84092 12.1813 8.9987 12.5625 8.9987 12.96C8.9987 13.3575 8.84092 13.7388 8.56002 14.02L7.58602 14.996H16C16.3978 14.996 16.7794 15.1541 17.0607 15.4354C17.342 15.7167 17.5 16.0982 17.5 16.496C17.5 16.8938 17.342 17.2754 17.0607 17.5567C16.7794 17.838 16.3978 17.996 16 17.996H7.58602L8.56102 18.97C8.84242 19.2514 9.0005 19.6331 9.0005 20.031C9.0005 20.429 8.84242 20.8106 8.56102 21.092C8.27963 21.3734 7.89798 21.5315 7.50002 21.5315C7.10207 21.5315 6.72042 21.3734 6.43902 21.092L2.90402 17.556C2.62282 17.2747 2.46484 16.8933 2.46484 16.4955C2.46484 16.0978 2.62282 15.7163 2.90402 15.435L6.43902 11.899C6.57832 11.7596 6.74372 11.6491 6.92578 11.5736C7.10783 11.4982 7.30296 11.4593 7.50002 11.4593C7.69709 11.4593 7.89222 11.4982 8.07427 11.5736C8.25632 11.6491 8.42172 11.7596 8.56102 11.899L8.56002 11.9ZM15.44 2.90002C15.7024 2.63742 16.0528 2.48143 16.4235 2.46222C16.7942 2.44301 17.1589 2.56194 17.447 2.79602L17.561 2.89902L21.096 6.43502C21.3585 6.69752 21.5143 7.04801 21.5333 7.41872C21.5523 7.78943 21.4332 8.15403 21.199 8.44202L21.096 8.55602L17.561 12.092C17.2898 12.3673 16.9228 12.5272 16.5365 12.5385C16.1502 12.5499 15.7745 12.4117 15.4876 12.1528C15.2007 11.8938 15.0249 11.5342 14.9966 11.1488C14.9684 10.7634 15.09 10.382 15.336 10.084L15.439 9.97002L16.414 8.99602H8.00002C7.61289 8.9987 7.23971 8.85159 6.95854 8.58546C6.67737 8.31934 6.50998 7.95481 6.49138 7.56812C6.47279 7.18142 6.60442 6.80251 6.85875 6.51063C7.11308 6.21875 7.47042 6.03651 7.85602 6.00202L8.00002 5.99602H16.414L15.439 5.02102C15.2996 4.88172 15.1891 4.71632 15.1136 4.53427C15.0382 4.35221 14.9993 4.15708 14.9993 3.96002C14.9993 3.76295 15.0382 3.56782 15.1136 3.38577C15.1891 3.20372 15.2996 3.03832 15.439 2.89902L15.44 2.90002Z" fill="${color}"/>
        </g>
        <defs>
          <clipPath id="clip0_219_8613">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `}
    />
  )
}

export default CompareIcon;