// storing User auth data here because I cannot create new users for every test run on production environment
export const UserAuthData = {
    email: 'xparohodx@gmail.com',
    password: 'LongPassword1029'
}

//Using in 'Create new cloud server' test in case of 'Add existing SSH key' option is enabled
export const test_SSH = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCajNEO5fxV9lGZOiyOye0NquEaJGY/j0hc31u37OMPqGjdU8YejIqAjuE7O8ZYTsh7gLm0w45YMnvcp4n6Paz779IBO58M9w4Ponv0Fz1bUVUxuX4zhoA44N+f1u98+66NeUWwb2TdzZPG3JVxsHHUJc01mhYgFEgszeQcHfv48yUTe8tDB50NxktTksO+7TK95cuLMo+T5rtA6+rhpfrQT7DlxylNdxQ+nXjMWQTiQNVM94G9soVUIFG0ijsTUStJTalcztccc79SFCeQbUh6gDcMboGDjR8zJFw7yZ6llUDsXh6ZDMCqDRIY86+8TFYHwWtRl+6Wv42MXE0sEc3R test@test.com';

export const enum Currencies {
    USD,
    EUR,
    SGD,
    HKD
}