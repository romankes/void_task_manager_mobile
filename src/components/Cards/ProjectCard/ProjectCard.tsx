import React, {FC} from 'react';

import {Text, ChevronIcon} from '@/components';
import {TouchableOpacity} from 'react-native';

import {useStyles} from './useStyles';
import {Project} from '@/bus/project';

type TProps = {
  project: Project.Item;

  onPress: () => any;
};

export const ProjectCard: FC<TProps> = ({project, onPress}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.6}
      onPress={onPress}>
      <Text size={16} family="medium">
        {project.title}
      </Text>

      <ChevronIcon color="default" size={24} />
    </TouchableOpacity>
  );
};
