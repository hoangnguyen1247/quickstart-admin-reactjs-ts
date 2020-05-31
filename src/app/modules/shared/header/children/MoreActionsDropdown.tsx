import React from 'react';
import { Link } from "react-router-dom";
import { 
    Dropdown, 
    DropdownMenu, 
    DropdownToggle, 
    DropdownItem, 
    Button,
} from "reactstrap";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import AccountIcon from "mdi-react/AccountIcon";
import MusicIcon from "mdi-react/MusicIcon";
import FlagIcon from "mdi-react/FlagIcon";
import CashUsdOutlineIcon from "mdi-react/CashUsdOutlineIcon";
import SettingsIcon from "mdi-react/SettingsIcon";
import CatIcon from "mdi-react/CatIcon";
import SignOutIcon from "mdi-react/SignOutIcon";

import { SUPPORTED_LANGUAGES } from "src/app/utils/Constants";

import { AppContext } from "src/app/AppContext";
import { Thumbnail } from 'src/app/core-ui/image/Thumbnail';

type Props = {
    className?: string,
    toggleIcon?: string,
    handleLanguageChange?: Function,
};

type State = {
    isOpen: boolean,
    selectedLanguage: string,
};

const defaultProps = {

};

export class MoreActionsDropdown extends React.Component<Props, State> {

    static contextType = AppContext;

    state: State = {
        isOpen: false,
        selectedLanguage: "vi",
    };

    constructor(props: Object) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this._handleAvatarClick = this._handleAvatarClick.bind(this);
    }

    // static getDerivedStateFromProps(props: Object, state: Object) {
    //     if (props.locale !== state.selectedLanguage) {
    //         return {
    //             selectedLanguage: props.locale || "vi",
    //         };
    //     }

    //     return null;
    // }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    _handleAvatarClick() {
        // this.toggle();
    }

    onLanguageChange = (selectedItem: any) => {
        const {handleLanguageChange} = this.props;

        this.setState({selectedLanguage: selectedItem.value}, () => {
            if (handleLanguageChange) {
                handleLanguageChange(selectedItem.value);
            }
        });
    };

    render() {
        const { selectedLanguage } = this.state;
        const {
            className, 
            toggleIcon, 
        } = this.props;
        const {
            profile,
        } = this.context;

        const parseSelectedLanguage = (selectedLanguage) => {
            return SUPPORTED_LANGUAGES.find(item => item.value === selectedLanguage) || SUPPORTED_LANGUAGES[0];
        };
        const dropdownMenuItems = [
            { link: `/user`, text: "Username", icon: <AccountIcon className="mr-2"/>, private: false, divider: false },
            { link: `/settings/profile`, text: "Hồ sơ của tôi", icon: <AccountIcon className="mr-2"/>, private: false, divider: false },
            { link: `/settings`, text: "Cài đặt", icon: <SettingsIcon className="mr-2"/>, private: true, divider: true },
            { link: `/music`, text: "Playlist", icon: <MusicIcon className="mr-2"/>, private: false, divider: false },
            { link: `/jars`, text: "Meow", icon: <CashUsdOutlineIcon className="mr-2"/>, private: true, divider: false },
            { link: `/places`, text: "Saved places", icon: <FlagIcon className="mr-2"/>, private: true, divider: false },
            { link: `/cats`, text: "Hội quán mèo", icon: <CatIcon className="mr-2"/>, private: true, divider: false },
            { link: `/settings`, text: "Cài đặt", icon: <SettingsIcon className="mr-2"/>, private: true, divider: true },
            { link: `/settings/profile`, text: "Cài đặt", icon: <SettingsIcon className="mr-2"/>, private: true, divider: false },
            { link: `/logout`, text: "Đăng xuất", icon: <SignOutIcon className="mr-2"/>, private: true, divider: false },
        ];

        return (
            <Dropdown 
                isOpen={this.state.isOpen} 
                toggle={this.toggle} 
                className={`more-actions-dropdown d-flex align-items-center ${className || ""}`}
            >
                <DropdownToggle
                    className="d-flex align-items-center"
                >
                    <Thumbnail 
                        className=""
                        onImageClick={this._handleAvatarClick}
                    />
                </DropdownToggle>
                <DropdownMenu right>
                    {Array.isArray(dropdownMenuItems) && dropdownMenuItems.length > 0 &&
                        dropdownMenuItems
                            .map((item, index) => {
                                if (!item.private) {
                                    if (!!item.divider) {
                                        return (<DropdownItem divider key={index}/>);
                                    } else {
                                        return (
                                            <Link
                                                key={index}
                                                to={`${item.link}`}
                                                className="dropdown-item d-flex align-items-center"
                                            >
                                                {item.icon}
                                                {item.text}
                                            </Link>
                                        );
                                    }
                                } else if (item.private && profile && profile.id) {
                                    if (item.divider) {
                                        return (<DropdownItem divider key={index}/>);
                                    } else {
                                        return (
                                            <Link
                                                key={index}
                                                to={`${item.link}`}
                                                className="dropdown-item d-flex align-items-center"
                                            >
                                                {item.icon}
                                                {item.text}
                                            </Link>
                                        );
                                    }
                                } else return null;
                            })
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
}
