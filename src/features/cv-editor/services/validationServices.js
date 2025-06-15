import { z } from 'zod';
const maxSymbel = 'Максимум 14 символов';
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
const dataRegex = new RegExp(/^\d{4}-(0[1-9]|1[0-2])$/);
const experienceItemSchema = z.object({
    id: z.string().uuid(),
    Company: z
        .string()
        .min(1, 'Название компании обязательно')
        .max(14, maxSymbel),
    Role: z.string().min(1, 'Должность обязательна').max(14, maxSymbel),
    StartDate: z
        .string()
        .min(1, 'Дата обязательна')
        .max(14, maxSymbel)
        .regex(dataRegex, 'Дата не валидна'),
    EndDate: z
        .string()
        .min(1, 'Дата обязательна')
        .max(14, maxSymbel)
        .regex(dataRegex, 'Дата не валидна'),
    Description: z
        .string()
        .min(1, 'Описание обязательно')
        .max(200, 'Максимум 200 символов'),
});
export const resumeSchema = z.object({
    FirstName: z.string().min(1, 'Имя обязательно').max(14, maxSymbel),
    LastName: z.string().min(1, 'Фамилия обязательна').max(14, maxSymbel),
    Profession: z.string().min(1, 'Профессия обязательна').max(14, maxSymbel),
    City: z.string().min(1, 'Город обязателен').max(14, maxSymbel),
    Country: z.string().min(1, 'Страна обязательна').max(14, maxSymbel),
    PostalCode: z.string().min(1, 'Индекс обязателен').max(14, maxSymbel),
    Phone: z
        .string()
        .min(1, 'Телефон обязателен')
        .regex(phoneRegex, 'Некорректный формат телефона'),
    Email: z
        .string()
        .min(1, 'Email обязателен')
        .email('Некорректный формат email'),
    Experience: z.array(experienceItemSchema),
});
