import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import BaseEntity from './base'
import { Comment, Reply } from './index'