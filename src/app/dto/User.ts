export interface IUser {
    id: string,
}

export function UserDto(_entityDto: any = {}) {
    return {
        id: _entityDto.id || null,
        username: _entityDto.username || "",
        email: _entityDto.email || "",
        phoneNumber: _entityDto.phone || "",
        isEmailComfirmed: _entityDto.isEmailComfirmed || false,
        isPhoneNumberComfirmed: _entityDto.isPhoneNumberComfirmed || false,
        firstName: _entityDto.firstName || "",
        lastName: _entityDto.lastName || "",
        fullName: _entityDto.fullName || _entityDto.firstName + _entityDto.lastName || "",
        dob: _entityDto.dob || "",
        avatarUrl: _entityDto.avatarUrl || "",
        avatar: _entityDto.avatar || null,
        gender: _entityDto.gender || "",
        address: _entityDto.address || "",
        jarsAppActivated: _entityDto.jarsAppActivated || false,
        createdDate: _entityDto.createdDate || "",
        createdBy: _entityDto.createdBy || null,
        lastModifiedDate: _entityDto.lastModifiedDate || "",
        lastModifiedBy: _entityDto.lastModifiedBy || null,
    }
}

export function UserDtoList(accountList = []) {
    const result: any[] = [];

    accountList.forEach((item) => {
        result.push(UserDto(item));
    });

    return result;
}
