'use client';

import './globals.css';
import '../styles/_variables.scss';
import '../styles/_keyframe-animations.scss';

import { SimpleEditor } from '@/components/templates/simple/simple-editor'


export default function Page() {  
  return <>
    <SimpleEditor />
  </>
}